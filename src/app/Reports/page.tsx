import ReportsTable from '@/components/reports/ReportsTable';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';

const ReportsPage = () => {
  return (
    <div className='bg-white rounded-xl flex flex-col items-center justify-center gap-5 mt-5'>
      <div className='w-full flex items-center justify-between px-4'>
        <div>
          <div className='flex items-center relative'>
            <input type='text' defaultValue='Search' className='font-light rounded-md p-2 md:w-[250px] w-[90%] focus:outline-gray-300 bg-gray-50 mt-3 ' />
            <CiSearch size={20} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <button className='bg-teal-100 text-teal-800 text-xs p-2 rounded-lg font-medium'>New Sheet</button>
          <div className='bg-teal-700 text-white text-xs p-2 rounded-lg font-medium flex items-center gap-2'>
            <button>New Report</button>
            <SlArrowDown />
          </div>
        </div>
      </div>
      <ReportsTable />
    </div>
  );
};

export default ReportsPage;
