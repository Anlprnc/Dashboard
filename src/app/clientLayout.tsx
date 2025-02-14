'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [activeIcon, setActiveIcon] = useState('dashboard');

  return (
    <>
      <Navbar />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
        <main className='flex-1 overflow-auto'>{React.cloneElement(children as React.ReactElement<{ activeIcon: string }>, { activeIcon })}</main>
      </div>
    </>
  );
}
