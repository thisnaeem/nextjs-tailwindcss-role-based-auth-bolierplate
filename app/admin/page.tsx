import { AdminDashboard } from "@/components/admin";

// Auth is handled by proxy.ts - if user reaches this page, they're authenticated
// Role check would need to be added here or use a proper admin guard
export default function AdminPage() {
    return <AdminDashboard />;
}
