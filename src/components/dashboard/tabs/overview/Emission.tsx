'use client';

import React, { useState } from 'react';
import { GoPencil } from 'react-icons/go';
import { PiCurrencyDollarLight } from 'react-icons/pi';
import { LuWeight } from 'react-icons/lu';

const Emission = () => {
  const buttonItems = [
    { icon: <PiCurrencyDollarLight />, name: 'dollar' },
    { icon: <LuWeight />, name: 'weight' },
  ];

  const [activeTab, setActiveTab] = useState('dollar');

  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2>Emission reduction</h2>
        <GoPencil size={13} />
      </div>
      <div className='bg-gray-100 rounded-xl p-5 mt-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <div className='flex flex-col items-start'>
              <span className='font-semibold text-xl'>322.000 tonnes</span>
              <span className='opacity-70 text-xs'>Cumulative ERs</span>
            </div>
            <div className='flex flex-col items-start'>
              <span className='font-semibold text-xl'>82.000 tonnes</span>
              <span className='opacity-70 text-xs'>This year</span>
            </div>
          </div>
          <div className='flex items-center justify-center text-sm bg-gray-200 rounded-lg'>
            {buttonItems.map(({ icon, name }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`p-2 w-full m-0.5 rounded-lg cursor-pointer transition-colors ${activeTab === name ? 'bg-white' : ''}`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emission;
