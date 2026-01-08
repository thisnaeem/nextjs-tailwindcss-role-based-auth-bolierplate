export type Role = "USER" | "ADMIN";

export interface User {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: string;
    disabled?: boolean;
}

export interface SidebarItem {
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
}
