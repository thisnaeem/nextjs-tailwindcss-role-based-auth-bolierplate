"use client";

import { Spinner } from "./Spinner";

interface LoaderProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function Loader({ size = "md", className = "" }: LoaderProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
    };

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <div className={`${sizeClasses[size]} relative`}>
                {/* Main Spinner */}
                <div className="absolute inset-0 rounded-full border-2 border-violet-600/20 border-t-violet-600 animate-spin" />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-sm animate-pulse" />
            </div>
        </div>
    );
}

export function FullScreenLoader() {
    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
            <div className="relative">
                {/* Premium multi-ring loader */}
                <div className="w-16 h-16 rounded-full border-t-2 border-violet-600 animate-spin" />
                <div className="absolute inset-0 w-16 h-16 rounded-full border-r-2 border-indigo-500 animate-[spin_1.5s_linear_infinite]" />
                <div className="absolute inset-0 w-16 h-16 rounded-full border-b-2 border-purple-400 opacity-50 animate-[spin_2s_linear_infinite]" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center animate-pulse">
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-sm font-medium text-gray-900 dark:text-white animate-pulse">
                Loading...
            </p>
        </div>
    );
}

export function PageLoader() {
    return (
        <div className="h-64 flex flex-col items-center justify-center">
            <Loader size="lg" />
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Loading content...</p>
        </div>
    );
}
