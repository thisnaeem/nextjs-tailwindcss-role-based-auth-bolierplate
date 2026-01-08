"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Sidebar } from "@/components/shared";
import { Spinner } from "@/components/ui";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending) {
            // Check if user has admin role
            const userRole = (session?.user as { role?: string })?.role;
            if (userRole !== "ADMIN") {
                router.push("/app");
            }
        }
    }, [session, isPending, router]);

    // Show loading while checking session
    if (isPending) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    // Check if user has admin role
    const userRole = (session?.user as { role?: string })?.role;
    if (userRole !== "ADMIN") {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-2">Access Denied</h1>
                    <p className="text-gray-400">You need ADMIN role to access this page.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950">
            <Sidebar variant="admin" />
            <main className="ml-64 p-8">{children}</main>
        </div>
    );
}
