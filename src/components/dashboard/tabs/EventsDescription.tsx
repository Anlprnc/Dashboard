import React from 'react';
import { GoPencil } from 'react-icons/go';

const EventsDescription = () => {
  return (
    <div className='w-full mt-4'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-medium'>Description</h3>
        <div className='flex items-center gap-1 opacity-70'>
          <GoPencil /> <span className='text-xs'>Edit</span>
        </div>
      </div>
      <div className='mt-3'>
        <p className='opacity-70 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora vero molestiae, et enim odit, nostrum similique facere nesciunt est quam corrupti repellendus
          commodi a voluptates adipisci. Dolorem, exercitationem voluptatem?
        </p>
      </div>
    </div>
  );
};

export default EventsDescription;
