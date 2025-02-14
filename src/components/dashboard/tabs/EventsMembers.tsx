import Image from 'next/image';
import React from 'react';
import { GoPencil } from 'react-icons/go';
import { TfiPlus } from 'react-icons/tfi';

const EventsMembers = () => {
  return (
    <div className='w-full mt-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-medium'>Members</h3>
        <div className='flex items-center gap-1 opacity-70'>
          <GoPencil /> <span className='text-xs'>Edit</span>
        </div>
      </div>
      <div className='flex items-center mt-3 gap-4'>
        <Image src={'/avatar.jpg'} alt='avatar' width={35} height={35} className='rounded-xl' />
        <TfiPlus size={18} />
      </div>
    </div>
  );
};

export default EventsMembers;
