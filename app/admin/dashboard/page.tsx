/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from 'next/image';

export default function AdminDashboard() {

    return (
        <div>
            <nav>
                <div className="logo-name">
                    <div className="logo-image">
                        <Image src="/sxc.png" alt="SXC Logo" width={50} height={50} />
                    </div>
                    <span className="logo_name">
                        <Image src="/logo.png" alt="Logo" width={150} height={50} priority />
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
                            <a href="#">
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <span className="link-name">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="top">
                    <i className="fa-solid fa-bars fa-xl sidebar-toggle"></i>
                    <div className="search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                    <div className="user-info">
                            <img
                                src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fworld-schools.com%2Fwp-content%2Fuploads%2F2023%2F01%2FIMG-Academy-cover-WS.webp&sp=1737130744T34f9ad8a0edf723432ce5e03591c2a7bf8d5b8edefab47418db08b18ea804a85" 
                                alt="Profile" 
                                width={40} 
                                height={40} 
                            />
                        <span className="user-name"></span>
                    </div>
                </div>
                {/* Rest of your dashboard content */}
            </section>
        </div>
    );
}