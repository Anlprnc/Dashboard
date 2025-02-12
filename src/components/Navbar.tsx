import Image from 'next/image';
import React from 'react';
import { GoBell } from 'react-icons/go';
import { SlArrowDown } from 'react-icons/sl';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  return (
    <nav className='w-full bg-gradient-to-r from-teal-50 from-25% to-gray-100 p-3 px-8 flex items-center justify-between'>
      <div className='flex items-center gap-10'>
        <div className='font-medium text-2xl'>Carbon</div>
        <div className='hidden md:flex items-center relative'>
          <input type='text' defaultValue='Search' className='bg-gray-50 rounded-md p-2 md:w-[350px] w-[90%] focus:outline-gray-300' />
          <CiSearch size={20} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <div>
          <GoBell size={17} />
        </div>
        <div className='flex items-center gap-1.5'>
          <Image src='/avatar.jpg' alt='avatar' width={40} height={40} className='rounded-lg' />
          <ul className='flex flex-col items-start text-sm'>
            <li className='font-semibold'>Full Surname</li>
            <li className='text-xs font-medium text-gray-500'>Role</li>
          </ul>
        </div>
        <div>
          <SlArrowDown size={12} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
