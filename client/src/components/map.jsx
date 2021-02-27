import React from 'react';
import GoogleMapReact from 'google-map-react';

// if (process.env.NODE_ENV === 'production') {
//   import { MAP_API } from '../../utils/googleConfigProd.js';
// } else {
  import { MAP_API } from '../../utils/googleConfigDev.js';
// }

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