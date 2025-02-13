import React from 'react';
import { HiMiniBarsArrowDown } from 'react-icons/hi2';

const EventsActivation = () => {
  const activations = ['Ongoing', 'Inactive', 'Overdue', 'Completed'];

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center justify-between gap-4'>
        {activations.map((activation, index) => (
          <div key={index} className='flex items-center gap-2 text-sm font-light'>
            <div className='p-1.5 px-2 rounded-xl bg-gray-100'>{activation} 0</div>
          </div>
        ))}
      </div>
      <div className='p-1.5 rounded-xl bg-gray-100 text-center'>
        <HiMiniBarsArrowDown size={20} />
      </div>
    </div>
  );
};

export default EventsActivation;
