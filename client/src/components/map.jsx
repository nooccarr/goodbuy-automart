import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_API } from '../../utils/googleConfig.js';

const Map = ({ defaultCenter, zoom, center, cars, getClickedCar }) => (
  <div className='mapContainer'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: MAP_API, language: 'en' }}
      defaultCenter={defaultCenter}
      defaultZoom={zoom}
      center={center}
      onChildClick={(e) => getClickedCar(e)}
    >
      {cars.map((car, idx) => (
        <Car
          className='carPositionOnMap'
          lat={car.latitude}
          lng={car.longitude}
          key={idx}
        />
      ))}
    </GoogleMapReact>
  </div>
);

const Car = (props) => (
  <img src="./car.png" width="25px" />
)

export default Map;