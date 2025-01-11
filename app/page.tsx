"use client";

import { Bebas_Neue } from 'next/font/google';
import "./style.css";

const bebasneue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
  })
  
export default function Home() {

  return (
      <div className="wel" style={bebasneue.style}>
          <h1>Welcome to Lost and Found</h1>
          <p>Lost and Found is a platform that helps you find your lost items and also helps you return found items to their owners.</p>
          <p>Sign in to get started</p>
        
      </div>
  );
}
