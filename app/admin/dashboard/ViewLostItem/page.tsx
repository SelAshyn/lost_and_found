import React from 'react';
import { Secular_One, Montserrat } from 'next/font/google';
import Link from 'next/link'; 

const sansation = Secular_One({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
  style: 'normal',
})

const TotalLostItem: React.FC = () => {
  return (
    <div>
      <div className="bg-[#0E0E0F] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-100 h-60">
      <h2 className="text-2xl font-semibold uppercase" style={sansation.style}>Lost Item</h2>
      <br />
      <button style={montserrat.style} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 uppercase font-bold bg-[#00FFF2]"><Link href=""><h3 className="tracking-widest">View Lost Item</h3></Link></button>
      <br /><br />
      <button style={montserrat.style} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 uppercase font-bold bg-[#1998A1]"><Link href=""><h3 className="tracking-widest">Pending Claims</h3></Link></button>
      <br />
    </div>
    </div>
  );
};

export default TotalLostItem;