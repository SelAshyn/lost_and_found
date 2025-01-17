"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import'./style.css';

export default function AdminDashboard() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    const stats = {
        totalUsers: 150,
        activeUsers: 85,
        totalPosts: 324
    };

    useEffect(() => {
        if (!session || session.user.role !== 'admin') {
            router.push('/');
        } else {
            setIsLoading(false);
        }
    }, [session, router]);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-64 bg-white shadow-md h-screen fixed">
                    <div className="p-4 border-b">
                        <div className="flex items-center justify-center">
                            <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
                        </div>
                    </div>
                    <nav className="p-4">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/admin/dashboard" 
                                      className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
                                    <span className="material-icons mr-3">dashboard</span>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/users"
                                      className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
                                    <span className="material-icons mr-3">people</span>
                                    Users
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/settings"
                                      className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-100">
                                    <span className="material-icons mr-3">settings</span>
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="ml-64 flex-1 p-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                {session?.user?.image && (
                                    <Image 
                                        src={session.user.image}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                )}
                                <span className="ml-2 text-gray-700">{session?.user?.name}</span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                            <p className="text-3xl font-bold text-gray-800">{stats.totalUsers}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
                            <p className="text-3xl font-bold text-gray-800">{stats.activeUsers}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-gray-500 text-sm font-medium">Total Posts</h3>
                            <p className="text-3xl font-bold text-gray-800">{stats.totalPosts}</p>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {/* Add your activity rows here */}
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                                            <td className="px-6 py-4 whitespace-nowrap">Created new post</td>
                                            <td className="px-6 py-4 whitespace-nowrap">2024-03-20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
