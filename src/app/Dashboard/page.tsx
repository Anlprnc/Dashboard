import Tabs from '@/components/dashboard/Tabs';
import Events from '@/components/dashboard/tabs/events/Events';
import Overview from '@/components/dashboard/tabs/overview/Overview';
// import Inventory from '@/components/dashboard/tabs/inventory/Inventory';
// import Documents from '@/components/dashboard/tabs/documents/Documents';
// import Overview from '@/components/dashboard/tabs/overview/Overview';
// import Reports from '@/components/dashboard/tabs/reports/Reports';
// import Photos from '@/components/dashboard/tabs/photos/Photos';
import React, { useState } from 'react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('Activity');

  const renderContent = () => {
    switch (activeTab) {
      case 'Activity':
        return <Events />;
      // case 'Inventory':
      //   return <Inventory />;
      // case 'Events':
      //   return <Events />;
      // case 'Documents':
      //   return <Documents />;
      case 'Overview':
        return <Overview />;
      // case 'Reports':
      //   return <Reports />;
      // case 'Photos':
      //   return <Photos />;
      default:
        return <Events />;
    }
  };

  return (
    <div className='rounded-2xl bg-white'>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </div>
  );
};

export default DashboardPage;
