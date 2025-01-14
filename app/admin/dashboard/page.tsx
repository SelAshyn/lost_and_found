"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import "./style.css";

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
        <div className="admin-container">
            <div className="admin-header">
                <h1 className="admin-title">Admin Dashboard</h1>
                <h2 className="admin-title">Welcome, {session.user.name}</h2>
                <div className="admin-welcome">
                    <span>Welcome, {session.user.name}</span>
                    <img 
                        src={session.user.image ?? ''} 
                        alt="Admin" 
                        className="admin-profile-pic"
                    />
                </div>
            </div>
            
            <div className="stats-grid">
                <div className="stat-card">
                    <h3 className="stat-title">Total Lost Items</h3>
                    <p className="stat-value">{stats.totalLost}</p>
                </div>
                <div className="stat-card">
                    <h3 className="stat-title">Total Found Items</h3>
                    <p className="stat-value">{stats.totalFound}</p>
                </div>
                <div className="stat-card">
                    <h3 className="stat-title">Pending Claims</h3>
                    <p className="stat-value">{stats.pendingClaims}</p>
                </div>
            </div>

            <div className="actions-grid">
                <div className="action-card">
                    <h2 className="action-title">Lost Items</h2>
                    <div className="action-buttons">
                        <Link href="/admin/lost-items" className="action-btn btn-blue">
                            View All Lost Items
                        </Link>
                        <Link href="/admin/lost-items/pending" className="action-btn btn-green">
                            Pending Claims
                        </Link>
                    </div>
                </div>

                <div className="action-card">
                    <h2 className="action-title">Found Items</h2>
                    <div className="action-buttons">
                        <Link href="/admin/found-items" className="action-btn btn-blue">
                            View All Found Items
                        </Link>
                        <Link href="/admin/found-items/add" className="action-btn btn-green">
                            Add Found Item
                        </Link>
                    </div>
                </div>

                <div className="action-card">
                    <h2 className="action-title">Management</h2>
                    <div className="action-buttons">
                        <Link href="/admin/users" className="action-btn btn-purple">
                            User Management
                        </Link>
                        <Link href="/admin/settings" className="action-btn btn-gray">
                            Settings
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 