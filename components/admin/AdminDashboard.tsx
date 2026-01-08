"use client";

import { Card, CardHeader, CardTitle, CardContent, Badge } from "@/components/ui";
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
    const adminName = session?.user?.name || "Admin";

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                    Admin Dashboard
                </h1>
                <p className="text-gray-400">
                    Welcome back, {adminName}! Here&apos;s an overview of your application.
                </p>
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
                                        <p className="text-sm text-gray-400 mb-1">{stat.title}</p>
                                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                                        <Badge variant="success" size="sm" className="mt-2">
                                            {stat.change}
                                        </Badge>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400">
                                        <Icon />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Recent Users */}
            <Card variant="glass">
                <CardHeader>
                    <CardTitle>Recent Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">User</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Email</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Role</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {/* Show current admin as an example */}
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="py-3 px-4 text-white">{session?.user?.name || "Admin"}</td>
                                    <td className="py-3 px-4 text-gray-400">{session?.user?.email || "admin@example.com"}</td>
                                    <td className="py-3 px-4">
                                        <Badge variant="admin">ADMIN</Badge>
                                    </td>
                                    <td className="py-3 px-4 text-gray-400">Today</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                        Connect to database to fetch real user data. This is a boilerplate example.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
