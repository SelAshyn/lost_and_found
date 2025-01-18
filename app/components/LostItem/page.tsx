"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import './styles.module.css'
import { Sofia_Sans, Source_Sans_3} from "next/font/google"

const sofia = Sofia_Sans({
    weight: '500',
    subsets: ['cyrillic-ext', 'greek'],
})

const source = Source_Sans_3({
    subsets: ['cyrillic-ext', 'greek'],
    weight: '400'
})

export default function Page() {
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
        <div>
            <div className="container">
                <div className="form" style={sofia.style}>
                    <br />
                    <h1>REPORT LOST ITEM</h1><br />
                    <label>Item Name</label>
                    <input type="text" name="text" className="input" style={source.style} required/>
                    <br />
                    <label htmlFor="">Lost Place</label>
                    <input type="text" name="text" className="input" style={source.style} required/>
                    <br />
                    <label htmlFor="">Lost Date</label>
                    <input type="date" name="date" className="input" style={source.style} required/>
                    <br />
                    <label htmlFor="">Contact</label>
                    <input type="tel" name="number" className="input" style={source.style} required/>
                    <br />
                    <label htmlFor="">Description of the Item</label><br /><br />
                    <textarea name="" id=""required></textarea>
                    <br />
                    <button style={sofia.style}>REPORT</button>
                    <br /><br />
                </div>                
            </div>
        </div>
    );
}