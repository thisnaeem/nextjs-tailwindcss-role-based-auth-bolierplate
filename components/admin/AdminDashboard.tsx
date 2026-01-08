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

const UsersIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ActivityIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const SecurityIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const AnalyticsIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const stats = [
    { title: "Total Users", value: "1,234", change: "+12%", icon: UsersIcon },
    { title: "Active Sessions", value: "89", change: "+5%", icon: ActivityIcon },
    { title: "Admin Users", value: "12", change: "+2", icon: SecurityIcon },
    { title: "Growth Rate", value: "23%", change: "+8%", icon: AnalyticsIcon },
];

export function AdminDashboard() {
    const { data: session } = useSession();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const adminName = session?.user?.name || "Admin";

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold dark:text-white mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Welcome back, {adminName}! Here&apos;s an overview of your application.
                    </p>
                </div>
                <Button onClick={() => setIsDialogOpen(true)}>
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Quick Action
                </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} variant="glass">
                            <CardContent>
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
                                        <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
                                        <Badge variant="success" size="sm" className="mt-2">
                                            {stat.change}
                                        </Badge>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                                        <Icon />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="logs">Activity Logs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <Card variant="glass">
                        <CardHeader>
                            <CardTitle>Recent Activity Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-white/10">
                                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">User</th>
                                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Email</th>
                                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Role</th>
                                            <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Joined</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                            <td className="py-3 px-4 dark:text-white">{session?.user?.name || "Admin"}</td>
                                            <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{session?.user?.email || "admin@example.com"}</td>
                                            <td className="py-3 px-4">
                                                <Badge variant="admin">ADMIN</Badge>
                                            </td>
                                            <td className="py-3 px-4 text-gray-500 dark:text-gray-400">Today</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="users">
                    <div className="p-8 text-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-gray-500">
                        User management view coming soon...
                    </div>
                </TabsContent>

                <TabsContent value="security">
                    <div className="p-8 text-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-gray-500">
                        Security settings view coming soon...
                    </div>
                </TabsContent>

                <TabsContent value="logs">
                    <div className="p-8 text-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-gray-500">
                        Activity logs view coming soon...
                    </div>
                </TabsContent>
            </Tabs>

            {/* Quick Action Dialog */}
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title="Admin Quick Action"
                description="Perform administrative tasks easily from this shortcuts menu."
                footer={
                    <div className="flex gap-3">
                        <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                        <Button onClick={() => setIsDialogOpen(false)}>Confirm</Button>
                    </div>
                }
            >
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-gray-900 dark:text-white">
                        <UsersIcon />
                        <span className="mt-2 text-sm font-medium">Add User</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-gray-900 dark:text-white">
                        <SecurityIcon />
                        <span className="mt-2 text-sm font-medium">Audit logs</span>
                    </button>
                </div>
            </Dialog>
        </div>
    );
}
