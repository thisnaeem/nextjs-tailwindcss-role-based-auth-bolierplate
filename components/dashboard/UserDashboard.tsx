"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Badge,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Dialog,
    Button
} from "@/components/ui";
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
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const userName = session?.user?.name?.split(" ")[0] || "User";

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold dark:text-white mb-2">
                        Welcome back, {userName}! 👋
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Here&apos;s what&apos;s happening with your account today.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Badge variant="user" className="hidden md:flex">
                        <span className="w-3 h-3 mr-1"><StarIcon /></span>
                        Free Plan
                    </Badge>
                    <Button onClick={() => setIsDialogOpen(true)} size="sm">
                        New Project
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6">
                <Card variant="glass">
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                <ActivityIcon />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Active Sessions</p>
                                <p className="text-2xl font-bold dark:text-white">1</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <DocumentIcon />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Documents</p>
                                <p className="text-2xl font-bold dark:text-white">12</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card variant="glass">
                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
                                <StarIcon />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Credits</p>
                                <p className="text-2xl font-bold dark:text-white">100</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                    <TabsTrigger value="billing">Plan & Billing</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
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
                                            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors group border border-transparent hover:border-violet-500/20">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                                    <Icon />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="dark:text-white font-medium">{link.title}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{link.description}</p>
                                                </div>
                                                <span className="text-gray-400 group-hover:text-violet-500 group-hover:translate-x-1 transition-all">
                                                    <ArrowRightIcon />
                                                </span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </CardContent>
                        </Card>

                        {/* Recent Activity List */}
                        <Card variant="glass">
                            <CardHeader>
                                <CardTitle>Latest Updates</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
                                        <div className="flex-1">
                                            <p className="dark:text-white text-sm font-medium">{activity.action}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="activity">
                    <Card variant="glass">
                        <CardContent className="py-12">
                            <div className="text-center">
                                <ActivityIcon />
                                <p className="mt-4 text-gray-500">Activity log detailed view coming soon...</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="billing">
                    <Card variant="glass">
                        <CardContent className="py-12">
                            <div className="text-center">
                                <StarIcon />
                                <p className="mt-4 text-gray-500">Subscription management coming soon...</p>
                                <Button className="mt-6" variant="secondary">Upgrade Now</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Quick Action Dialog */}
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="Create New Project"
                description="Start a new workspace to organize your tasks."
                footer={
                    <div className="flex gap-3">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIsDialogOpen(false)}>Create Project</Button>
                    </div>
                }
            >
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium dark:text-white">Project Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-violet-500/50 focus:outline-none transition-all dark:text-white"
                            placeholder="My Awesome Project"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium dark:text-white">Category</label>
                        <select className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-violet-500/50 focus:outline-none transition-all dark:text-white">
                            <option>Work</option>
                            <option>Personal</option>
                            <option>Research</option>
                        </select>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
