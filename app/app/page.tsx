import { UserDashboard } from "@/components/dashboard";

// Auth is handled by proxy.ts - if user reaches this page, they're authenticated
export default function AppPage() {
    return <UserDashboard />;
}
