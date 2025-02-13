import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';
import EventsActivation from './EventsActivation';

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
      </div>
      <div className='border-l border-gray-300'>2</div>
    </div>
  );
};

export default Events;
