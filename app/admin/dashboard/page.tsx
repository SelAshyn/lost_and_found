"use client";

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AdminDashboard() {
    const { data: session } = useSession();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        if (!session || session.user.role !== 'admin') {
            router.push('/');
        }
    }, [session, router]);

    if (!session || session.user.role !== 'admin') {
        return null;
    }

    const handleLogout = async () => {
        await signOut({ redirect: true, callbackUrl: '/' });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className={!menuOpen ? 'close' : ''}>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src="/sxc.png" alt="SXC Logo" />
                    </div>
                    <span className="logo_name">
                        <img src="/logo.png" alt="Logo" width={150}/>
                    </span>
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <Link href="/admin/dashboard">
                                <i className="fa-solid fa-gauge"></i>
                                <span className="link-name">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/users">
                                <i className="fa-solid fa-users"></i>
                                <span className="link-name">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/analytics">
                                <i className="fa-solid fa-chart-simple"></i>
                                <span className="link-name">Analytics</span>
                            </Link>
                        </li>
                    </ul>
                    
                    <ul className="logout-mode">
                        <li>
                            <Link href="/">
                                <i className="fa-solid fa-house"></i>
                                <span className="link-name">Home</span>
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <span className="link-name">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="top">
                    <i className="fa-solid fa-bars fa-xl sidebar-toggle" onClick={toggleMenu}></i>
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                    <div className="user-info">
                        {session.user.image && (
                            <img src={session.user.image} alt="Profile" />
                        )}
                        <span className="user-name">{session.user.name}</span>
                    </div>
                </div>
                {/* Rest of your dashboard content */}
            </section>
        </div>
    );
}