import React from 'react';
import { Secular_One, Saira_Stencil_One } from 'next/font/google';

const sansation = Secular_One({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
})

const saira = Saira_Stencil_One({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
})

const TotalLostItem: React.FC = () => {
  return (
    <div>
      <div className="hover:transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 bg-[#0E0E0F] p-6 rounded-lg shadow-md w-100 h-60">
      <h2 className="text-2xl font-semibold uppercase" style={sansation.style}>Total Lost Item</h2>
      <br />
      <p className="text-9xl font-bold text-emerald-200" style={saira.style}>10</p>
      <br />
    </div>
    </div>
  );
};

export default TotalLostItem;