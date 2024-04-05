import { jwtVerify, SignJWT, type JWTPayload } from "jose";

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET);
export const EXPIRATION = Number(process.env.JWT_EXPIRATION) || 24 * 60 * 60 * 1000; // Default value: 1 day

export async function sign<T extends JWTPayload>(payload: T): Promise<string | null> {
    try {
        return await new SignJWT(payload)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime(Date.now() + EXPIRATION)
            .sign(SECRET_KEY);
    } catch (_) {
        return null;
    }
}

export async function verify<T extends JWTPayload>(token: string): Promise<T | null> {
    try {
        const { payload } = await jwtVerify<T>(token, SECRET_KEY, { algorithms: ["HS256"] });

        return payload;
    } catch (_) {
        return null;
    }
}
