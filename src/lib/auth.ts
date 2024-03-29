"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import type z from "zod";
import type { User } from "@prisma/client";

import db from "@/lib/db";
import { sign, verify, EXPIRATION } from "@/lib/jwt";
import { signupSchema, loginSchema } from "@/lib/schemas";
import { capitalizeName } from "@/lib/utils";

type AuthResponse = { success: true; error?: undefined } | { success: false; error: string };

export async function signup(values: z.infer<typeof signupSchema>): Promise<AuthResponse> {
    try {
        const parsed = await signupSchema.safeParseAsync(values);
        if (!parsed.success) {
            return { success: false, error: "Fields are invalid!" };
        }

        const { firstname, lastname, age, password } = parsed.data;
        const email = parsed.data.email.toLowerCase();

        const existingUser = await db.user.findUnique({ where: { email } });
        if (existingUser) {
            return { success: false, error: "Email address already in use!" };
        }

        const user = await db.user.create({
            data: {
                firstname: capitalizeName(firstname),
                lastname: capitalizeName(lastname),
                age,
                email,
                password: await bcrypt.hash(password, 10),
            },
        });
        const token = await sign({ user: { id: user.id } });
        if (!token) {
            return { success: false, error: "There was an error while generating the session!" };
        }

        cookies().set("token", token, { expires: Date.now() + EXPIRATION, httpOnly: true });

        return { success: true };
    } catch (e) {
        console.error(e);

        return { success: false, error: "There was an unexpected error!" };
    }
}

export async function login(values: z.infer<typeof loginSchema>): Promise<AuthResponse> {
    try {
        const parsed = await loginSchema.safeParseAsync(values);
        if (!parsed.success) {
            return { success: false, error: "Fields are invalid!" };
        }

        const { email, password } = parsed.data;

        const user = await db.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!(user && (await bcrypt.compare(password, user.password)))) {
            return { success: false, error: "Invalid credentials!" };
        }

        const token = await sign({ user: { id: user.id } });
        if (!token) {
            return { success: false, error: "There was an error while generating the session!" };
        }

        cookies().set("token", token, { expires: Date.now() + EXPIRATION, httpOnly: true });

        return { success: true };
    } catch (e) {
        console.error(e);

        return { success: false, error: "There was an unexpected error!" };
    }
}

export async function getSession(): Promise<{ user: Pick<User, "id"> } | null> {
    const token = cookies().get("token")?.value;
    if (!token) return null;

    return await verify(token);
}

// biome-ignore lint/suspicious/useAwait: Server actions must be asynchronous functions.
export async function logout(): Promise<void> {
    cookies().delete("token");
    redirect("/");
}
