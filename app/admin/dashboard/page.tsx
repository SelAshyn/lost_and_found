"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
    const { data: session } = useSession();
    const router = useRouter();
    const [stats, setStats] = useState({
        totalLost: 0,
        totalFound: 0,
        pendingClaims: 0
    });

    useEffect(() => {
        if (!session || session.user.role !== 'admin') {
            router.push('/');
        }
    }, [session, router]);

    useEffect(() => {
        // Fetch stats from your API
        const fetchStats = async () => {
            // Replace with actual API call
            const data = {
                totalLost: 10,
                totalFound: 5,
                pendingClaims: 3
            };
            setStats(data);
        };

        if (session?.user?.role === 'admin') {
            fetchStats();
        }
    }, [session]);

    if (!session || session.user.role !== 'admin') {
        return null;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Welcome, {session.user.name}</span>
                        <img 
                            src={session.user.image ?? ''} 
                            alt="Admin" 
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>
                
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-gray-500">Total Lost Items</h3>
                        <p className="text-3xl font-bold">{stats.totalLost}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-gray-500">Total Found Items</h3>
                        <p className="text-3xl font-bold">{stats.totalFound}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-gray-500">Pending Claims</h3>
                        <p className="text-3xl font-bold">{stats.pendingClaims}</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Lost Items</h2>
                        <div className="space-y-3">
                            <Link href="/admin/lost-items" 
                                className="block w-full bg-blue-500 text-white px-4 py-2 rounded text-center hover:bg-blue-600">
                                View All Lost Items
                            </Link>
                            <Link href="/admin/lost-items/pending" 
                                className="block w-full bg-yellow-500 text-white px-4 py-2 rounded text-center hover:bg-yellow-600">
                                Pending Claims
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Found Items</h2>
                        <div className="space-y-3">
                            <Link href="/admin/found-items" 
                                className="block w-full bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600">
                                View All Found Items
                            </Link>
                            <Link href="/admin/found-items/add" 
                                className="block w-full bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700">
                                Add Found Item
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Management</h2>
                        <div className="space-y-3">
                            <Link href="/admin/users" 
                                className="block w-full bg-purple-500 text-white px-4 py-2 rounded text-center hover:bg-purple-600">
                                User Management
                            </Link>
                            <Link href="/admin/settings" 
                                className="block w-full bg-gray-500 text-white px-4 py-2 rounded text-center hover:bg-gray-600">
                                Settings
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 