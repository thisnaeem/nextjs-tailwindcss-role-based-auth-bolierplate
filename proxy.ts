import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Static files and Next.js internals - skip
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/favicon") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    // Auth API routes should pass through
    if (pathname.startsWith("/api/auth")) {
        return NextResponse.next();
    }

    // Check for session cookie (Better Auth session token)
    const sessionCookie = request.cookies.get("better-auth.session_token");
    const isAuthenticated = !!sessionCookie?.value;

    // Protected routes - require authentication
    if (pathname.startsWith("/admin") || pathname.startsWith("/app")) {
        if (!isAuthenticated) {
            const loginUrl = new URL("/login", request.url);
            loginUrl.searchParams.set("callbackUrl", pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Redirect authenticated users away from auth pages
    if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/app", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
