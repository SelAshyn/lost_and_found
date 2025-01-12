"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import { Arima } from 'next/font/google';
import Link from 'next/link';
import "./style.css";
import { useState } from 'react';

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
});

export default function Appbar() {
  const session = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="whole">
      <nav className={arima.className}>
        <div className="logo">
          <h1>
            <Link href="/">
              <img src="/sxc.png" width={50} height={100} alt="Logo" />
            </Link>
            <Link href="/">
              <img src="/logo.png" width={160} height={110} alt="Logo" className="log1" />
            </Link>
          </h1>
        </div>
        <ul>
          <li><a href="../components/LostItem">Lost an Item</a></li>
          <li><a href="../components/FoundItem">Found an Item</a></li>
          <li><a href="#">View Lost Items</a></li>
          <li><a href="#">View Found Item</a></li>
          <li><a href="#">Returned Item</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        {session.data?.user ? (
          <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={session.data.user.image ?? ''} alt="User Profile" className="profile-pic" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => signOut()}>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <button className="sign" onClick={() => signIn()}>SignIn</button>
        )}
      </nav>
    </div>
  );
}
