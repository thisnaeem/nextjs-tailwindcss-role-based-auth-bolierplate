"use client";

import { Card, CardHeader, CardTitle, CardContent, Button, Input, Avatar } from "@/components/ui";
import { useSession } from "@/lib/auth-client";

const UserIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const CameraIcon = () => (
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export default function ProfilePage() {
    const { data: session } = useSession();

    const userName = session?.user?.name || "";
    const userEmail = session?.user?.email || "";
    const userImage = session?.user?.image;

    return (
        <div className="space-y-8 max-w-2xl">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
                <p className="text-gray-400">Manage your personal information</p>
            </div>

            {/* Avatar Section */}
            <Card variant="glass">
                <CardContent>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Avatar src={userImage} fallback={userName || userEmail} size="xl" />
                            <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-violet-600 hover:bg-violet-700 transition-colors text-white">
                                <CameraIcon />
                            </button>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                {userName || "User"}
                            </h3>
                            <p className="text-gray-400">{userEmail}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Profile Form */}
            <Card variant="glass">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400">
                            <UserIcon />
                        </div>
                        <CardTitle>Personal Information</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <Input
                            label="Full Name"
                            placeholder="Your name"
                            defaultValue={userName}
                        />
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            defaultValue={userEmail}
                            disabled
                        />
                        <Button type="button">Update Profile</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
