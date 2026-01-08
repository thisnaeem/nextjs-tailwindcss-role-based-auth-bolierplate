import { SettingsContent } from "./settings-content";

// Auth is handled by proxy.ts - if user reaches this page, they're authenticated
export default function SettingsPage() {
    return <SettingsContent />;
}
