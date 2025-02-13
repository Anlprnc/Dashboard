import Tabs from '@/components/dashboard/Tabs';
import Events from '@/components/dashboard/tabs/Events';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className='rounded-2xl bg-white'>
      <Tabs />
      <Events />
    </div>
  );
};

export default DashboardPage;
