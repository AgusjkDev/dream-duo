import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@prisma/client";

import { verify, sign, EXPIRATION } from "@/lib/jwt";

const PROTECTED_ROUTES: string[] = [];
const AUTH_ROUTES: string[] = ["/signup", "/login"];

export default async function middleware(req: NextRequest) {
    const { origin, pathname } = req.nextUrl;
    const token = req.cookies.get("token")?.value;
    const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route));

    if (!token) {
        return isProtectedRoute
            ? NextResponse.redirect(`${origin}/login?next=${encodeURIComponent(pathname)}`, {
                  status: 307,
              })
            : NextResponse.next();
    }

    const payload = await verify<{ user: Omit<User, "password"> }>(token);
    if (!payload) {
        const res = isProtectedRoute
            ? NextResponse.redirect(`${origin}/login?next=${encodeURIComponent(pathname)}`, {
                  status: 307,
              })
            : NextResponse.next();
        res.cookies.delete("token");

        return res;
    }

    const newToken = await sign({ user: payload.user });
    if (!newToken) {
        return NextResponse.next();
    }

    const res = AUTH_ROUTES.some((route) => pathname.startsWith(route))
        ? NextResponse.redirect(origin, { status: 307 })
        : NextResponse.next();

    res.cookies.set("token", newToken, { expires: Date.now() + EXPIRATION, httpOnly: true });

    return res;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
