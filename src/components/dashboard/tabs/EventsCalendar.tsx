'use client';

import React, { useState } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { Calendar } from '@/components/ui/calendar';

const EventsCalendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
    }
    setShowCalendar(false);
  };

  return (
    <div className='relative'>
      <div className='flex items-center gap-1 w-full'>
        <div className='bg-gray-100 w-full rounded-xl flex items-start justify-between p-3 cursor-pointer' onClick={() => setShowCalendar(!showCalendar)}>
          <div className='flex flex-col gap-2'>
            <span className='font-semibold text-gray-400 text-[14px]'>{selectedDate ? selectedDate.toLocaleDateString() : 'Select'}</span>
            <span className='text-xs opacity-70'>Verification period</span>
          </div>
          <div className='p-1 bg-gray-200 rounded-lg'>
            <IoCalendarClearOutline />
          </div>
        </div>
        <div className='bg-gray-100 w-full rounded-xl flex flex-col items-start gap-2 p-3'>
          <h3 className='font-semibold text-sm'>Lewis H.</h3>
          <span className='text-xs opacity-70'>Request by</span>
        </div>
        <div className='bg-gray-100 w-full rounded-xl flex flex-col items-start gap-2 p-3'>
          <h3 className='font-semibold text-sm'>n/a</h3>
          <span className='text-xs opacity-70'>Status of request</span>
        </div>
        <div className='bg-gray-100 w-full rounded-xl flex flex-col items-start gap-2 p-3'>
          <h3 className='font-semibold text-sm'>n/a</h3>
          <span className='text-xs opacity-70'>Budget</span>
        </div>
      </div>
      {showCalendar && (
        <div className='absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-xl z-10'>
          <Calendar mode='single' selected={selectedDate} onSelect={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;
