"use client";

import { Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

const HomeIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const ActivityIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const DocumentIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const StarIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const quickLinks = [
    { title: "Profile Settings", description: "Update your personal information", href: "/app/profile", icon: HomeIcon },
    { title: "Account Settings", description: "Manage security and preferences", href: "/app/settings", icon: ActivityIcon },
];

const recentActivity = [
    { action: "Logged in from new device", time: "2 hours ago", type: "security" },
    { action: "Updated profile picture", time: "Yesterday", type: "profile" },
    { action: "Changed password", time: "3 days ago", type: "security" },
];

export function UserDashboard() {
    const { data: session } = useSession();
    const userName = session?.user?.name?.split(" ")[0] || "User";

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Welcome back, {userName}! 👋
                    </h1>
                    <p className="text-gray-400">
                        Here&apos;s what&apos;s happening with your account today.
                    </p>
                </div>
                <Badge variant="user" className="self-start md:self-center">
                    <span className="w-3 h-3 mr-1"><StarIcon /></span>
                    Free Plan
                </Badge>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
                <Card variant="glass">
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400">
                                <ActivityIcon />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Active Sessions</p>
                                <p className="text-2xl font-bold text-white">1</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <DocumentIcon />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Documents</p>
                                <p className="text-2xl font-bold text-white">12</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/20 flex items-center justify-center text-amber-400">
                                <StarIcon />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Credits</p>
                                <p className="text-2xl font-bold text-white">100</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Quick Links */}
                <Card variant="glass">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {quickLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <Link key={index} href={link.href}>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400">
                                            <Icon />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white font-medium">{link.title}</p>
                                            <p className="text-sm text-gray-400">{link.description}</p>
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">
                                            <ArrowRightIcon />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card variant="glass">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-violet-500" />
                                <div className="flex-1">
                                    <p className="text-white text-sm">{activity.action}</p>
                                    <p className="text-xs text-gray-400">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
