import React from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from '@/pages/Dashboard';
import LeftBar from '../common/LeftBar';
import Navbar from '../common/Navbar';

export default function BaseLayout({ children }) {
  const location = useLocation();

  return (
    <div className="relative">
      {
        location.pathname !== '/' && location.pathname !== '/register' && (
        <header className="flex flex-row">
          <LeftBar />
          <Navbar />
        </header>
        )
      }

      <div className="">
        {children}
      </div>
    </div>
  );
}
