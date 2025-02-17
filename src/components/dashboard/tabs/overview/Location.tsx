import { MapProvider } from '@/providers/map-provider';
import React from 'react';
import { GoPencil } from 'react-icons/go';
import { MapComponent } from './Map';

const Location = () => {
  return (
    <div className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2>Location</h2>
        <GoPencil size={13} />
      </div>
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </div>
  );
};

export default Location;
