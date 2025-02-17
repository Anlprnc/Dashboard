import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { SlArrowDown } from 'react-icons/sl';

const Header = () => {
  return (
    <div>
      <div className='w-full flex items-start justify-between'>
        <h2 className='font-medium text-2xl'>
          Myanmar Kyeeonkyeewa Solar Power <br /> Plant Project
        </h2>
        <div className='bg-gray-100 p-2 rounded-lg'>
          <HiOutlineDotsVertical />
        </div>
      </div>
      <div className='flex items-center justify-start gap-1 mt-2'>
        <button className='flex items-center bg-yellow-200 text-orange-800 gap-2 p-1 px-2.5 rounded-lg text-xs font-medium'>
          In development
          <span>
            <SlArrowDown size={13} />
          </span>
        </button>
        <span className='flex items-center bg-gray-100 text-black gap-2 p-1 px-2.5 rounded-lg text-xs'>Energy Demand</span>
        <span className='text-xs opacity-70 font-medium ml-2'>ID: 1907</span>
      </div>
    </div>
  );
};

export default Header;
