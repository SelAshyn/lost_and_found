"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import TotalLostItem from "./TotalLostItem/page"
import TotalFoundItem from './TotalFoundItem/page';
import PendingClaims from './PendingClaims/page';
import Management from './Management/page'; 
import ViewLostItem from './ViewLostItem/page';
import ViewFoundItem from './ViewFoundItem/page';
import "./style.css";
import { M_PLUS_Rounded_1c } from 'next/font/google';

const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
    subsets: ['latin'],
    weight: '700',
  })

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
        <center>
      <br /><br /><br /><br />
      <div className="head">
        <h1 className={`font-bold text-3xl ${m_PLUS_Rounded_1c.className}`}>ADMIN DASHBOARD</h1>
      </div>
      <br /><br /><br /><br />
    <div className="khai">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <TotalLostItem />
        <TotalFoundItem />
        <PendingClaims />
      </div>
      <br /><br /><br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <ViewLostItem />
        <ViewFoundItem />
        <Management />
      </div>
    </div>
    </center>
    );
} 