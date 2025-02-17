import React from 'react';
import Header from './Header';
import Box from './Box';
import Location from './Location';
import Emission from './Emission';
import FilesBoxes from './FilesBoxes';

const Overview = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[815px_auto]'>
      <div className='border-r-0 lg:border-r border-gray-300 p-3 md:p-10'>
        <Header />
        <Box />
        <Location />
        <Emission />
      </div>
      <div>
        <FilesBoxes />
      </div>
    </div>
  );
};

export default Overview;
