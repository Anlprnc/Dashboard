import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';
import EventsActivation from './EventsActivation';
import EventsCards from './EventsCards';
import { IoIosStarOutline } from 'react-icons/io';
import EventsCalendar from './EventsCalendar';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import EventsMembers from './EventsMembers';

const Events = () => {
  const buttonItems = ['Project operations event', 'Verification events'];
  const [activeTab, setActiveTab] = useState(buttonItems[0]);

  return (
    <div className='grid grid-cols-[520px_auto]'>
      <div className='flex flex-col gap-y-5 m-8'>
        <div className='flex items-center justify-between gap-5'>
          <div className='hidden md:flex items-center relative'>
            <input type='text' defaultValue='Search' className='font-light rounded-md p-2 md:w-[250px] w-[90%] focus:outline-gray-300' />
            <CiSearch size={20} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
          </div>
          <div className='flex items-center gap-3 p-2 px-5 rounded-xl bg-teal-600 text-white'>
            <button>Create</button>
            <SlArrowDown size={12} />
          </div>
        </div>
        <div className='flex items-center justify-center text-sm bg-gray-100 rounded-xl'>
          {buttonItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item)}
              className={`p-2 w-full m-0.5 rounded-lg cursor-pointer transition-colors ${activeTab === item ? 'bg-white' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <EventsActivation />
        <EventsCards />
      </div>
      <div className='border-l border-gray-300'>
        <div className='flex flex-col gap-y-5 mx-14 my-10'>
          <div className='flex items-start justify-between'>
            <h2 className='font-medium w-[70%] text-2xl'>Verification of documents and photos in the government of GRESCSS</h2>
            <HiOutlineDotsVertical className='m-1' />
          </div>
          <div className='flex items-center gap-5'>
            <span className='bg-cyan-100 flex items-center gap-2 text-sm text-cyan-700 p-0.5 px-2 rounded-lg font-medium'>
              <IoIosStarOutline /> New
            </span>
            <span className='opacity-70 text-sm'>Verification event</span>
          </div>
          <EventsCalendar />
          <EventsMembers />
        </div>
      </div>
    </div>
  );
};

export default Events;
