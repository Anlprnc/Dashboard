import Image from 'next/image';
import React from 'react';
import { IoDocumentAttachOutline } from 'react-icons/io5';

const status = ['Active', 'New', 'Completed'];

const EventsCards = () => {
  return (
    <div className='bg-gray-100 rounded-xl flex flex-col'>
      <div className='flex items-start justify-between'>
        <div className='flex flex-col items-start m-3'>
          <p className='text-[14px]'>Test</p>
          <p className='text-xs opacity-70'>Myanmar Project</p>
          <div className='mt-1'>
            <span className='bg-emerald-200 p-1 px-1.5 rounded-lg text-[11px] text-teal-800 font-medium'>Active</span>
          </div>
        </div>
        <div className='text-[10px] bg-gray-200 m-3 py-2 px-1 rounded-lg'>
          <div className='border-b border-gray-400'>13.02.25</div>
          <div>14.02.25</div>
        </div>
      </div>
      <div className='ml-3 mb-3 mt-1 mr-3 flex items-center justify-between'>
        <div>
          <Image src='/avatar.jpg' alt='avatars' width={20} height={20} className='rounded-md' />
        </div>
        <div className='flex items-center gap-1 opacity-70'>
          <IoDocumentAttachOutline size={16} />
          <span className='text-xs'>4</span>
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
