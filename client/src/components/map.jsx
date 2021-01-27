import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_API } from '../../utils/googleConfig.js';

const Map = ({ defaultCenter, zoom, center, cars, getClickedCar }) => (
  <div style={{ height: '500px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: MAP_API, language: 'en' }}
      defaultCenter={defaultCenter}
      defaultZoom={zoom}
      center={center}
      onChildClick={e => getClickedCar(e)}
    >
      {cars.map((car, idx) => {
        return (
          <Car
            style={{
              position: 'absolute',
              transform: 'translate(-50%, -50%)'
            }}
            lat={car.latitude}
            lng={car.longitude}
            key={idx}
          />
        );
      })}
    </GoogleMapReact>
  </div>
);

const Car = () => (
  <div>
    <img
      src="./car.png"
      width="25px"
      height="25px"
    />
  </div>
);

export default Map;