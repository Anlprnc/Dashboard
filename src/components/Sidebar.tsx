'use client';
import React from 'react';
import { IoCalendar } from 'react-icons/io5';
import { FaFile } from 'react-icons/fa6';
import { PiBuildingsFill } from 'react-icons/pi';
import { MdDashboard } from 'react-icons/md';

const Sidebar = ({ activeIcon, setActiveIcon }: any) => {
  const handleClick = (icon: string) => {
    setActiveIcon(icon);
  };

  return (
    <div className='flex items-start w-10 md:w-14 h-screen bg-teal-600 text-white'>
      <div className='flex flex-col justify-center items-center gap-8 w-full pt-8'>
        {[
          { icon: <MdDashboard className='size-4 md:size-5' />, name: 'dashboard' },
          { icon: <IoCalendar className='size-4 md:size-5' />, name: 'calendar' },
          { icon: <FaFile className='size-4 md:size-5' />, name: 'file' },
          { icon: <PiBuildingsFill className='size-4 md:size-5' />, name: 'buildings' },
        ].map(({ icon, name }) => (
          <span
            key={name}
            onClick={() => handleClick(name)}
            className={`p-1 md:p-2 rounded-lg md:rounded-xl transition-colors cursor-pointer ${activeIcon === name ? 'bg-white text-teal-600' : ''}`}
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
