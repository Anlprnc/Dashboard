import React from 'react';
import { HiMiniBarsArrowDown } from 'react-icons/hi2';
import eventData from '../../../../data/event-card-data.json';

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
    <div className='flex items-center justify-between'>
      <div className='flex items-center justify-between gap-4'>
        {activations.map((activation, index) => (
          <div key={index} className='flex items-center gap-2 text-sm font-light'>
            <div className='p-1.5 px-2 rounded-xl bg-gray-100'>
              {activation.name} {activation.count}
            </div>
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
