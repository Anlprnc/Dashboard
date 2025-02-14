import React from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';

const EventsCalendar = () => {
  return (
    <div>
      <div className='flex items-center gap-1 w-full'>
        <div className='bg-gray-100 w-full rounded-xl flex items-start justify-between p-3'>
          <div className='flex flex-col gap-2'>
            <span className='font-semibold text-gray-400 text-[14px]'>Select</span>
            <span className='text-xs opacity-70'>Verification period</span>
          </div>
          <div className='p-1 bg-gray-200 rounded-lg'>
            <IoCalendarClearOutline />
          </div>
        </div>
        <div className='bg-gray-100 w-full rounded-xl flex flex-col items-start gap-2 p-3'>
          <h3 className='font-semibold  text-sm'>Lewis H.</h3>
          <span className='text-xs opacity-70'>Request by</span>
        </div>
        <div className='bg-gray-100 w-full rounded-xl flex flex-col items-start gap-2 p-3'>
          <h3 className='font-semibold  text-sm'>n/a</h3>
          <span className='text-xs opacity-70'>Status of request</span>
        </div>
        <div className='bg-gray-100 w-full rounded-xl flex flex-col items-start gap-2 p-3'>
          <h3 className='font-semibold  text-sm'>n/a</h3>
          <span className='text-xs opacity-70'>Budget</span>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
