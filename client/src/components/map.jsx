import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ defaultCenter, zoom, center, cars, getClickedCar }) => (
  <div className='mapContainer'>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.MAP_API, language: 'en' }}
      defaultCenter={defaultCenter}
      defaultZoom={zoom}
      center={center}
      onChildClick={(e) => getClickedCar(e)}
    >
      {cars.map((car, idx) => (
        <Car
          lat={car.latitude}
          lng={car.longitude}
          key={idx}
        />
      ))}
    </GoogleMapReact>
  </div>
);

const Car = (props) => (
  <img className='carPositionOnMap' src='/img/car.png' />
)

export default Map;