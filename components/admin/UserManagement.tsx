"use client";

import { Card, CardContent, Badge, Button } from "@/components/ui";
import { useState } from "react";

const SearchIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const FilterIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
);

const EditIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
);

const DeleteIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const mockUsers = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "USER", status: "active", joined: "Jan 15, 2024" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "ADMIN", status: "active", joined: "Jan 10, 2024" },
    { id: "3", name: "Mike Johnson", email: "mike@example.com", role: "USER", status: "inactive", joined: "Dec 28, 2023" },
    { id: "4", name: "Sarah Williams", email: "sarah@example.com", role: "USER", status: "active", joined: "Jan 5, 2024" },
    { id: "5", name: "Tom Brown", email: "tom@example.com", role: "USER", status: "active", joined: "Jan 12, 2024" },
];

export function UserManagement() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredUsers = mockUsers.filter(
        (user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
                    <p className="text-gray-400">Manage all users and their roles</p>
                </div>
                <Button>
                    <span className="mr-2"><UsersIcon /></span>
                    Add User
                </Button>
            </div>

            {/* Filters */}
            <Card variant="glass" padding="sm">
                <CardContent className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                        />
                    </div>
                    <Button variant="secondary">
                        <span className="mr-2"><FilterIcon /></span>
                        Filter
                    </Button>
                </CardContent>
            </Card>

            {/* Users Table */}
            <Card variant="glass">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">User</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Role</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Status</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Joined</th>
                                    <th className="text-right py-4 px-6 text-sm font-medium text-gray-400">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6">
                                            <div>
                                                <p className="text-white font-medium">{user.name}</p>
                                                <p className="text-gray-400 text-sm">{user.email}</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <Badge variant={user.role === "ADMIN" ? "admin" : "user"}>
                                                {user.role}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-6">
                                            <Badge variant={user.status === "active" ? "success" : "warning"}>
                                                {user.status}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-6 text-gray-400">{user.joined}</td>
                                        <td className="py-4 px-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                                    <EditIcon />
                                                </button>
                                                <button className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors">
                                                    <DeleteIcon />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
