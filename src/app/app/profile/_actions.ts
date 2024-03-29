"use server";
import type z from "zod";

import db from "@/lib/db";
import { profileSchema } from "@/lib/schemas";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const DISABLED_FIELDS = ["firstname", "lastname", "age"] as const;
export async function updateProfile(values: z.infer<typeof profileSchema>) {
    try {
        const session = await getSession();
        if (!session) {
            return { success: false, error: "Not authorized!" };
        }

        const parsed = await profileSchema.safeParseAsync(values);
        if (!parsed.success) {
            return { success: false, error: "Fields are invalid!" };
        }

        const { data } = parsed;
        const { user: profile } = session;
        if (
            Object.entries(data)
                .filter(([_, v]) => v !== undefined)
                .every(([k, v]) => v === profile[k as keyof typeof profile])
        ) {
            return { success: true, error: "No changes were made." };
        }

        await db.user.update({ where: { id: profile.id }, data });
        revalidatePath("/app/profile", "page");

        return { success: true };
    } catch (e) {
        console.error(e);

        return { success: false, error: "There was an unexpected error!" };
    }
}
