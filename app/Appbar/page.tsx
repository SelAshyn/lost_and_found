"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import { Arima } from 'next/font/google';
import Link from 'next/link';
import "./style.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
});

export default function Appbar() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.role === 'admin') {
      router.push('/admin/dashboard');
    }
  }, [session, router]);

  const handleSignIn = async () => {
    await signIn();
  };

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
          {session?.user?.role === 'admin' ? (
            <>
              <li><Link href="/admin/users">Manage Users</Link></li>
              <li><Link href="/admin/settings">Settings</Link></li>
            </>
          ) : (
            <>
              <li><Link href="/components/LostItem">Lost an Item</Link></li>
              <li><Link href="/components/FoundItem">Found an Item</Link></li>
              <li><Link href="/viewlost">View Lost Item</Link></li>
              <li><Link href="/viewfound">View Found Item</Link></li>
              <li><Link href="/returned">Returned Item</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </>
          )}
        </ul>
        {session?.user ? (
          <div className="user-info" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={session.user.image ?? ''} alt="User Profile" className="profile-pic" />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => signOut()}>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <button className="sign" onClick={handleSignIn}>SignIn</button>
        )}
      </nav>
    </div>
  );
}
