import Image from 'next/image';
import React from 'react';

const Hero = ({ activeIcon }: any) => {
  const imageMap: { [key: string]: string } = {
    dashboard: '/wind-turbine.jpg',
    calendar: '/orange-bg.jpg',
    file: '/green-bg.jpg',
    // buildings: '/buildings-image.jpg',
  };

  const title: { [key: string]: string } = {
    dashboard: 'Dashboard',
    calendar: 'Calendar',
    file: 'File',
    buildings: 'Buildings',
  };

  return (
    <div className='px-4 md:px-8 w-full relative'>
      <span className='absolute px-4 top-6 text-gray-100 text-sm z-10'>{title[activeIcon] || 'Dashboard'}</span>

      <div className='relative w-full aspect-[4/2] md:aspect-[4/1] lg:aspect-[5/1]'>
        <Image src={imageMap[activeIcon] || '/wind-turbine.jpg'} alt='hero-image' fill className='object-cover object-center rounded-b-2xl' />
      </div>
    </div>
  );
};

export default Hero;
