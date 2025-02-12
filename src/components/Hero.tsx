import Image from 'next/image';
import React from 'react';
import { FaFile } from 'react-icons/fa6';
import { IoCalendar } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { PiBuildingsFill } from 'react-icons/pi';

const Hero = ({ activeIcon }: any) => {
  const imageMap: { [key: string]: string } = {
    dashboard: '/wind-turbine.jpg',
    calendar: '/orange-bg.jpg',
    file: '/green-bg.jpg',
  };

  const iconMap: { [key: string]: React.ReactNode } = {
    dashboard: <MdDashboard className='size-4' />,
    calendar: <IoCalendar className='size-4' />,
    file: <FaFile className='size-4' />,
    buildings: <PiBuildingsFill className='size-4' />,
  };

  const title: { [key: string]: string } = {
    dashboard: 'Dashboard',
    calendar: 'Calendar',
    file: 'File',
    buildings: 'Buildings',
  };

  return (
    <div className='px-4 md:px-8 w-full relative'>
      <div className='flex items-center absolute px-4 top-6 text-gray-100 text-sm z-10 gap-2'>
        <span>{iconMap[activeIcon] || ''}</span> {title[activeIcon] || 'Dashboard'}
      </div>
      <div className='relative w-full aspect-[5/2] md:aspect-[5/1] lg:aspect-[6/1]'>
        <Image src={imageMap[activeIcon] || '/wind-turbine.jpg'} alt='hero-image' fill className='object-cover object-center rounded-b-2xl' />
      </div>
    </div>
  );
};

export default Hero;
