import React from 'react';
import { HiMiniBarsArrowDown } from 'react-icons/hi2';
import eventData from '../../../../../data/event-card-data.json';

const EventsActivation = () => {
  const activationCounts = {
    Ongoing: eventData.filter((event) => event.status === 'Active').length,
    Inactive: eventData.filter((event) => event.status === 'Pending').length,
    Overdue: eventData.filter((event) => event.status === 'New').length,
    Completed: eventData.filter((event) => event.status === 'Completed').length,
  };

  const activations = [
    { name: 'Ongoing', count: activationCounts.Ongoing },
    { name: 'Inactive', count: activationCounts.Inactive },
    { name: 'Overdue', count: activationCounts.Overdue },
    { name: 'Completed', count: activationCounts.Completed },
  ];

  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
      <div className='grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-3 flex-grow'>
        {activations.map((activation, index) => (
          <div key={index} className='flex items-center justify-center text-sm font-light'>
            <div className='p-1.5 px-2 rounded-xl bg-gray-100 text-center'>
              {activation.name} {activation.count}
            </div>
          </div>
        ))}
      </div>
      <div className='p-1.5 rounded-xl bg-gray-100 text-center self-end sm:self-auto'>
        <HiMiniBarsArrowDown size={20} />
      </div>
    </div>
  );
};

export default EventsActivation;
