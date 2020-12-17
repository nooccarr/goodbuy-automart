import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_API } from '../../utils/googleConfig.js';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCarClick = this.handleCarClick.bind(this);
  }

  handleCarClick(idx) {
    this.props.getClickedCar(idx);
  }

  render() {
    const { defaultCenter, zoom, center, cars } = this.props;

    return (
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_API, language: 'en' }}
          defaultCenter={defaultCenter}
          defaultZoom={zoom}
          center={center}
          onChildClick={e => this.handleCarClick(e)}
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
                text={<img
                  src="./car.png"
                  width="25px"
                  height="25px"
                />}
                key={idx}
              />
            );
          })}
        </GoogleMapReact>
      </div>
    )
  }
};

const Car = ({ text }) => <div>{text}</div>;

export default Map;