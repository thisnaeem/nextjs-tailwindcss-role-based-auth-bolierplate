"use client";

import { Toaster as Sonner } from "sonner";
import { useTheme } from "next-themes";

export function Toaster() {
    const { theme } = useTheme();

    return (
        <Sonner
            theme={theme as "light" | "dark" | "system"}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast:
                        "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-gray-900 group-[.toaster]:text-gray-950 dark:group-[.toaster]:text-gray-50 group-[.toaster]:border-gray-200 dark:group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-gray-500 dark:group-[.toast]:text-gray-400",
                    actionButton:
                        "group-[.toast]:bg-violet-600 group-[.toast]:text-white",
                    cancelButton:
                        "group-[.toast]:bg-gray-100 dark:group-[.toast]:bg-white/5 group-[.toast]:text-gray-500 dark:group-[.toast]:text-gray-400",
                },
            }}
        />
    );
}
