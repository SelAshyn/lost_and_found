"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import './style.css';

export default function AdminDashboard() {
    const { data: session } = useSession();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        if (!session || session.user.role !== 'admin') {
            router.push('/');
        }
    }, [session, router]);

    if (!session) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="admin-container">
            <nav className={`sidebar ${!isMenuOpen ? 'close' : ''}`}>
                <div className="logo-details">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} className="logo-icon" />
                    <span className="logo-name">Admin Panel</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link href="/admin/dashboard">
                            <i className="fas fa-home"></i>
                            <span className="link-name">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/users">
                            <i className="fas fa-users"></i>
                            <span className="link-name">Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings">
                            <i className="fas fa-cog"></i>
                            <span className="link-name">Settings</span>
                        </Link>
                    </li>
                    <li className="logout-link">
                        <button onClick={() => signOut()}>
                            <i className="fas fa-sign-out-alt"></i>
                            <span className="link-name">Logout</span>
                        </button>
                    </li>
                </ul>
            </nav>

            <section className="dashboard">
                <div className="top-bar">
                    <i 
                        className={`fas fa-bars sidebar-toggle`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    ></i>
                    <div className="user-info">
                        {session.user.image && (
                            <Image 
                                src={session.user.image} 
                                alt="Profile" 
                                width={35} 
                                height={35} 
                                className="profile-img"
                            />
                        )}
                        <span>{session.user.name}</span>
                    </div>
                </div>

                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="fas fa-tachometer-alt"></i>
                            <span className="text">Dashboard</span>
                        </div>

                        <div className="boxes">
                            <div className="box box1">
                                <i className="fas fa-users"></i>
                                <span className="text">Total Users</span>
                                <span className="number">750</span>
                            </div>
                            <div className="box box2">
                                <i className="fas fa-chart-line"></i>
                                <span className="text">Total Sales</span>
                                <span className="number">$8,500</span>
                            </div>
                            <div className="box box3">
                                <i className="fas fa-clipboard-list"></i>
                                <span className="text">Total Orders</span>
                                <span className="number">350</span>
                            </div>
                        </div>
                    </div>

                    <div className="activity">
                        <div className="title">
                            <i className="fas fa-clock"></i>
                            <span className="text">Recent Activity</span>
                        </div>

                        <div className="activity-data">
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Action</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>Created new post</td>
                                        <td>2 hours ago</td>
                                    </tr>
                                    <tr>
                                        <td>Jane Smith</td>
                                        <td>Updated profile</td>
                                        <td>3 hours ago</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
