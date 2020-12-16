import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MAP_API } from '../../utils/googleConfig.js';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: MAP_API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
};

export default Map;