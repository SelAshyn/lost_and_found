"use client";

import { Bebas_Neue } from 'next/font/google';
import "./style.css";
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

const bebasneue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
  })
  
export default function Home() {
  const { data: session } = useSession();

  return (
      <div className="wel" style={bebasneue.style}>

        {session?.user ? (
          <div>
            <h1>Welcome to SXC Lost && Found, <span style={{fontSize: '40px', color: 'aqua'}}>{session.user.name}</span></h1>
            <h2>by <span style={{ color: 'red' }}>Student</span> for <span style={{ color: 'red' }}>Student</span></h2>
          </div>
        ) : (
          <>
            <h1>Welcome to SXC Lost && Found</h1>
            <h2>by <span style={{ color: 'red' }}>Student</span> for <span style={{ color: 'red' }}>Student</span></h2>
        <br />
        <center>
              <h3 className='signw'>
                Please <a href="#" style={{color: 'yellow'}} onClick={() => signIn()}>signin</a> to continue.
              </h3>
            </center> 
          </>
        )}
        
      </div>
  );
}
