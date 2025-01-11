"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import { Arima } from 'next/font/google';
import Link from 'next/link';
import "./style.css";

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
});

export default function Appbar() {
  const session = useSession();
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
          <li><a href="#">Lost an Item</a></li>
          <li><a href="#">Found an Item</a></li>
          <li><a href="#">View Lost Item</a></li>
          <li><a href="#">View Found Item</a></li>
          <li><a href="#">Returned Item</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        {session.data?.user && <button className="sign" onClick={() => signOut()}>SignOut</button>}
        {!session.data?.user && <button className="sign" onClick={() => signIn()}>SignIn</button>}
        </nav>
    </div>
  );
}
