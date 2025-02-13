'use client';
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import DashboardPage from './Dashboard/page';

export default function Home({ activeIcon }: { activeIcon: string }) {
  return (
    <div className='bg-teal-50 px-4 md:px-8 h-screen'>
      <Hero activeIcon={activeIcon} />
      <DashboardPage />
    </div>
  );
}
