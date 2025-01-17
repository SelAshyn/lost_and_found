"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import './style.css';

export default function AdminDashboard() {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!session || session.user.role !== 'admin') {
            router.push('/');
        }
    }, [session, router]);

    if (!session || session.user.role !== 'admin') {
        return null;
    }

    return (
        <div className="dashboard-container">
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
            </div>
        </div>
    );
}