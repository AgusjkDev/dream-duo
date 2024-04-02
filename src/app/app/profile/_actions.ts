"use server";

import { revalidatePath } from "next/cache";
import type z from "zod";
import type { User } from "@prisma/client";

import db from "@/lib/db";
import { getSession } from "@/lib/auth";
import { profileSchema } from "@/lib/schemas";

export async function updateProfile(
    profile: Omit<User, "password">,
    values: z.infer<typeof profileSchema>,
) {
    try {
        const session = await getSession();
        if (!session || session.user.id !== profile.id) {
            return { success: false };
        }

        const parsed = await profileSchema.safeParseAsync(values);
        if (!parsed.success) {
            return { success: false, error: "Fields are invalid!" };
        }

        if (
            Object.entries(parsed.data)
                .filter(([_, v]) => v !== undefined)
                .every(([k, v]) => {
                    const profileValue = profile.data[k as keyof typeof profile.data];
                    if (v instanceof Date && profileValue instanceof Date) {
                        return v.getTime() === profileValue.getTime();
                    }

                    return v === profileValue;
                })
        ) {
            return { success: true };
        }

        await db.user.update({
            where: { id: session.user.id },
            data: {
                data: {
                    update: {
                        ...parsed.data,
                        firstname: undefined,
                        lastname: undefined,
                        birthdate: undefined,
                    },
                },
            },
        });
        revalidatePath("/app", "layout");

        return { success: true };
    } catch (e) {
        console.error(e);

        return { success: false, error: "There was an unexpected error!" };
    }
}
