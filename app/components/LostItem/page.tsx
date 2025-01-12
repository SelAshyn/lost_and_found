"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export function LostItem() {
    const { data: session } = useSession();
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (!session) {
            setShowPopup(true);
            const timer = setTimeout(() => {
                setShowPopup(false);
                router.push('/');
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [session, router]);

    if (!session) {
        return showPopup ? (
            <div className={styles.overlay}>
                <div className={`${styles.popup} ${showPopup ? styles.show : ''}`}>
                    <div className={styles.popupContent}>
                        <h2>Please Sign In First!</h2>
                        <p>Redirecting to home page...</p>
                    </div>
                </div>
            </div>
        ) : null;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Report Lost Item</h1>
            <div className="space-y-4">
                <form className="space-y-4">
                    <div>
                        <label className="block mb-2">Item Name</label>
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded"
                            placeholder="Enter item name"
                        />
                    </div>
                    {/* Add more form fields as needed */}
                </form>
            </div>
        </div>
    );
}

export default LostItemPage;