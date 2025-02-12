'use client';
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [activeIcon, setActiveIcon] = useState('dashboard');

  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
        <Hero activeIcon={activeIcon} />
      </div>
    </div>
  );
}
