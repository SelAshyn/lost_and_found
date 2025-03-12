import React from 'react';
import './style.css';
import { M_PLUS_Rounded_1c } from 'next/font/google';
import TotalLostItem from "./TotalLostItem/page"
import TotalFoundItem from './TotalFoundItem/page';
import PendingClaims from './PendingClaims/page';
import Management from './Management/page'; 
import ViewLostItem from './ViewLostItem/page';
import ViewFoundItem from './ViewFoundItem/page';


const m_PLUS_Rounded_1c = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: '700',
})

const Dashboard: React.FC = () => {
  return (
    <center>
      <br /><br /><br /><br />
      <div className="head">
        <h1 className={`font-bold text-3xl ${m_PLUS_Rounded_1c.className}`}>ADMIN DASHBOARD</h1>
      </div>
      <br /><br /><br /><br />
    <div className="khai">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <TotalLostItem />
        <TotalFoundItem />
        <PendingClaims />
      </div>
      <br /><br /><br /><br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <ViewLostItem />
        <ViewFoundItem />
        <Management />
      </div>
    </div>
    </center>
  );
};

export default Dashboard;


