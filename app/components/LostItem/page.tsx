"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import './style.css'
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
           <div className="content">
            <center>
            <div className="wrapper">
                <br />
    <header style={sofia.style}>REPORT LOST ITEM</header>
    <form action="#" style={source.style}>
      <div className="dbl-field">
        <div className="field">
          <input type="text" name="name" placeholder="Item Name" />
          <i className="bi bi-box-fill"></i>
        </div>
        <div className="field">
          <input type="text" name="email" placeholder="Lost Place" />
          <i className="bi bi-geo-alt-fill"></i>
        </div>
      </div>
      <div className="dbl-field">
        <div className="field">
          <i className="bi bi-envelope-fill"></i>
          <input 
            type="email" 
            name="email" 
            value={session.user?.email || ''} 
            readOnly 
            style={{ backgroundColor: '#1a1a1a' }}
          />
        </div>
        <div className="field">
          <input type="text" name="website" placeholder="Lost Date (dd/mm/yyyy)" />
          <i className="bi bi-calendar-event-fill"></i>
        </div>
      </div>
      <div className="dbl-field">
        <div className="field">
          <select name="Select Category" id="" aria-placeholder='Select Category'>
            <option value="" disabled selected hidden>Select Category</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <i className="bi bi-bookmarks-fill"></i>
        </div>
        <div className="field">
          <input type="tel" name="website" placeholder="Phone Number" />
          <i className="bi bi-telephone-fill"></i>
        </div>
      </div>
      <div className="message">
        <textarea placeholder="Description of the Item" name="message"></textarea>
        <i className="bi bi-file-earmark-fill"></i>
      </div>
      <center>
      <div className="button-area">
        <button type="submit">REPORT</button>
        <span></span>
      </div>
      </center>
      <br />
    </form>
  </div>
            </center>
            </div>
        </div>
    );
}