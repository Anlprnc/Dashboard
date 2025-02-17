import React from 'react';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';

const Box = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-start gap-1 mt-3 w-full'>
      <div className='flex flex-col items-start justify-center bg-gray-100 p-3 w-full md:w-36 rounded-lg'>
        <span className='flex items-center gap-3'>
          <span className='text-sm font-medium'>4029</span>
          <span className='opacity-60'>
            <HiArrowTopRightOnSquare size={13} />
          </span>
        </span>
        <span className='text-[10px] opacity-70'>Registry ID</span>
      </div>
      <div className='flex flex-col items-start justify-center bg-gray-100 p-3 w-full md:w-36 rounded-lg'>
        <span className='text-sm font-medium'>VM0038</span>
        <span className='text-[10px] opacity-70'>Methodology</span>
      </div>
      <div className='flex flex-col items-start justify-center bg-gray-100 p-3 w-full md:w-40 rounded-lg'>
        <span className='flex items-center gap-3'>
          <span className='text-sm font-medium'>Myanmar, Asia </span>
          <span className='opacity-60'>
            <IoLocationOutline size={13} />
          </span>
        </span>
        <span className='text-[10px] opacity-70'>Location</span>
      </div>
    </div>
  );
};

export default Box;
