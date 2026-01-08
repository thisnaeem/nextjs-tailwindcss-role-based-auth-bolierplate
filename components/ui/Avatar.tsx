import React from "react";

interface AvatarProps {
    src?: string | null;
    alt?: string;
    fallback?: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export function Avatar({
    src,
    alt = "Avatar",
    fallback,
    size = "md",
    className = "",
}: AvatarProps) {
    const sizes = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg",
    };

    const getFallback = () => {
        if (fallback) return fallback.slice(0, 2).toUpperCase();
        if (alt) return alt.slice(0, 2).toUpperCase();
        return "?";
    };

    return (
        <div
            className={`${sizes[size]} rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-600 text-white font-medium ring-2 ring-white/20 ${className}`}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            ) : (
                <span>{getFallback()}</span>
            )}
        </div>
    );
}
