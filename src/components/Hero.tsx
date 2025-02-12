import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='px-4 md:px-8 w-full relative'>
      <span className='absolute px-4 top-6 text-gray-100 text-sm opacity-70 z-10'>Dashboard</span>
      <div className='relative w-full aspect-[4/2] md:aspect-[4/1] lg:aspect-[5/1]'>
        <Image src='/wind-turbine.jpg' alt='hero-image' fill className='object-cover rounded-b-2xl' />
      </div>
    </div>
  );
};

export default Hero;
