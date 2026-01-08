import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "danger" | "info" | "admin" | "user";
    size?: "sm" | "md";
    className?: string;
}

export function Badge({
    children,
    variant = "default",
    size = "md",
    className = "",
}: BadgeProps) {
    const variants = {
        default: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
        success: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400",
        warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-400",
        danger: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-400",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400",
        admin: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white",
        user: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white",
    };

    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-xs",
    };

    return (
        <span
            className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </span>
    );
}
