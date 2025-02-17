'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Home from './page';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeIcon, setActiveIcon] = useState('dashboard');

  return (
    <>
      <Navbar />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
        <main className='flex-1 overflow-auto'>
          <Home activeIcon={activeIcon} />
        </main>
      </div>
    </>
  );
}
