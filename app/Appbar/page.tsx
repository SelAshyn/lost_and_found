"use client";

import { Arima } from 'next/font/google';
import Link from 'next/link';
import "./style.css";

const arima = Arima({
  subsets: ['greek'],
  weight: '400',
});

export default function Appbar() {

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
        <button className="sign">Sign In</button>
        </nav>
    </div>
  );
}
