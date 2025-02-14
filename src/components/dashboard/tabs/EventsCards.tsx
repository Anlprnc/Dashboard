import Image from 'next/image';
import React from 'react';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import eventData from '../../../../data/event-card-data.json';

const getStatusStyles = (status: any) => {
  switch (status) {
    case 'Active':
      return 'bg-emerald-200 text-teal-800';
    case 'New':
      return 'bg-blue-200 text-blue-800';
    case 'Pending':
      return 'bg-yellow-200 text-yellow-800';
    case 'Completed':
      return 'bg-red-200 text-red-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const EventsCards = () => {
  return (
    <>
      {eventData.map((event) => (
        <div key={event.id} className='bg-gray-100 rounded-xl flex flex-col'>
          <div className='flex items-start justify-between'>
            <div className='flex flex-col items-start m-3'>
              <p className='text-[14px]'>{event.title}</p>
              <p className='text-xs opacity-70'>Project Details</p>
              <div className='mt-1'>
                <span className={`p-1 px-1.5 rounded-lg text-[11px] font-medium ${getStatusStyles(event.status)}`}>{event.status}</span>
              </div>
            </div>
            <div className='text-[10px] bg-gray-200 m-3 py-2 px-1 rounded-lg text-center'>
              <div className='border-b border-gray-400'>{event.start_date}</div>
              <div>{event.end_date}</div>
            </div>
          </div>
          <div className='ml-3 mb-3 mt-1 mr-3 flex items-center justify-between'>
            <div className='flex -space-x-1'>
              {event.participants.map((participant, index) => (
                <Image key={index} src={participant.avatar} alt={participant.name} width={20} height={20} className='rounded-md border border-white' />
              ))}
            </div>
            <div className='flex items-center gap-1 opacity-70'>
              <IoDocumentAttachOutline size={16} />
              <span className='text-xs'>{event.attachments}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventsCards;
