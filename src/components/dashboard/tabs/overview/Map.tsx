'use client';

import { GoogleMap } from '@react-google-maps/api';

const defaultMapContainerStyle = {
  width: '100%',
  height: '250px',
  borderRadius: '15px',
};

const defaultMapCenter = {
  lat: 21.378474428653586,
  lng: 76.29873721314438,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
};

const MapComponent = () => {
  return (
    <div className='w-full mt-3'>
      <GoogleMap mapContainerStyle={defaultMapContainerStyle} center={defaultMapCenter} zoom={defaultMapZoom} options={defaultMapOptions}></GoogleMap>
    </div>
  );
};

export { MapComponent };
