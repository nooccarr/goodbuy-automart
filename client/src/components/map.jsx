import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_API } from '../../utils/googleConfig.js';

const Car = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { defaultCenter, zoom, center, cars } = this.props;

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_API, language: 'en' }}
          defaultCenter={defaultCenter}
          defaultZoom={zoom}
          center={center}
        >
          {cars.map((car, idx) => {
            return (
              <Car
                lat={car.latitude}
                lng={car.longitude}
                text="My Marker"
                key={idx}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    )
  }
};

export default Map;