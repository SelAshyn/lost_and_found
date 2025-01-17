"use client";

import { useSession } from 'next-auth/react';
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
                    <br />
                    <span className="logo_name">
                        <img src="/logo.png" alt="Logo" width={150}/>
                    </span>
                    <br /><br />
                </div>
                <div className="menu-items">
                    <ul className="nav-links">
                        <li>
                            <Link href="/admin/dashboard">
                                <i className="fa-solid fa-house"></i>
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
                                <i className="fa-solid fa-square-poll-vertical"></i>
                                <span className="link-name">Analytics</span>
                            </Link>
                        </li>
                    </ul>
                    
                    <ul className="logout-mode">
                        <li>
                            <a href="#" onClick={() => router.push('/')}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <span className="link-name">Back to Home</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="top">
                    <i className="fa-solid fa-bars fa-xl" onClick={toggleMenu}></i>
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                    {session.user.image && (
                        <img src={session.user.image} alt="Profile" />
                    )}
                </div>
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="fa-solid fa-gauge-simple-high"></i>
                            <span className="text">Dashboard</span>
                        </div>
                        <div className="boxes">
                            <div className="box box1">
                                <i className="fa-solid fa-person-circle-question"></i>
                                <span className="text">Lost Items</span>
                                <span className="number">50</span>
                            </div>
                            <div className="box box2">
                                <i className="fa-solid fa-person-circle-plus"></i>
                                <span className="text">Found Items</span>
                                <span className="number">20</span>
                            </div>
                            <div className="box box3">
                                <i className="fa-solid fa-circle-exclamation"></i>
                                <span className="text">Pending</span>
                                <span className="number">10</span>
                            </div>
                        </div>
                    </div>
                    {/* Rest of your dashboard content */}
                </div>
            </section>
        </div>
    );
}