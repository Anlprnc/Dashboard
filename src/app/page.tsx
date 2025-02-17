'use client';
import React from 'react';
import Hero from '@/components/Hero';
import DashboardPage from './Dashboard/page';
import ReportsPage from './Reports/page';

export default function Home({ activeIcon }: { activeIcon: string }) {
  const renderContent = () => {
    switch (activeIcon) {
      case 'dashboard':
        return <DashboardPage />;
      case 'file':
        return <ReportsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className='bg-teal-50 px-4 md:px-8 h-screen'>
      <Hero activeIcon={activeIcon} />
      {renderContent()}
    </div>
  );
}
