import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "glass" | "solid";
    padding?: "none" | "sm" | "md" | "lg";
    hover?: boolean;
}

export function Card({
    children,
    className = "",
    variant = "glass",
    padding = "md",
    hover = false,
}: CardProps) {
    const variants = {
        default: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
        glass: "bg-white/5 backdrop-blur-xl border border-white/10",
        solid: "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700",
    };

    const paddings = {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    const hoverStyles = hover
        ? "transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-500/10 cursor-pointer"
        : "";

    return (
        <div
            className={`rounded-2xl ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
    return (
        <h3
            className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}
        >
            {children}
        </h3>
    );
}

interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export function CardDescription({
    children,
    className = "",
}: CardDescriptionProps) {
    return (
        <p className={`text-sm text-gray-500 dark:text-gray-400 mt-1 ${className}`}>
            {children}
        </p>
    );
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
    return <div className={className}>{children}</div>;
}

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
    return (
        <div className={`mt-4 pt-4 border-t border-white/10 ${className}`}>
            {children}
        </div>
    );
}
