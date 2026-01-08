"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Dialog({
    isOpen,
    onClose,
    title,
    description,
    children,
    footer,
    size = "md",
}: DialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        full: "max-w-[95vw]",
    };

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-gray-950/40 dark:bg-gray-950/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Content */}
            <div
                ref={dialogRef}
                className={`relative w-full ${sizeClasses[size]} bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden animate-in zoom-in-95 fade-in duration-300`}
            >
                <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                            {title && (
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {title}
                                </h3>
                            )}
                            {description && (
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                    {description}
                                </p>
                            )}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 text-gray-400 hover:text-gray-500 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative">
                        {children}
                    </div>
                </div>

                {footer && (
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-white/10 flex items-center justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{children}</h3>;
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
    return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>;
}
