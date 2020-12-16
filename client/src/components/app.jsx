import React from 'react';
import axios from 'axios';
import Map from './map.jsx';
import Search from './search.jsx';
import CarDetails from './carDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCenter: {
        lat: 40.7282,
        lng: -73.7949
      },
      center: {
        lat: 40.7282,
        lng: -73.7949
      },
      zoom: 8,
      cars: [],
      clickedCar: null
    };
    this.getCarList = this.getCarList.bind(this);
    this.getClickedCar = this.getClickedCar.bind(this);
  }

  getCarList(manufacturer, latitude, longitude, mileageMin, mileageMax, distance) {
    return axios
      .get('/cars', {
        params: {
          manufacturer: manufacturer,
          latitudeMin: latitude - 1, // approx. 69 miles
          latitudeMax: latitude + 1,
          longitudeMin: longitude - 1,
          longitudeMax: longitude + 1,
          mileageMin: mileageMin,
          mileageMax: mileageMax,
          distance: distance
        }
      })
      .then(({ data }) => {
        this.setState({
          center: {
            lat: latitude,
            lng: longitude
          },
          cars: data
        });
      })
      .catch(err => console.log(err));
  }

  getClickedCar(idx) {
    this.setState({
      clickedCar: this.state.cars[idx]
    })
  }

  render() {
    return(
      <React.Fragment>
        {console.log(this.state)}
        <h1>Find your next match</h1>
        <Map
          defaultCenter={this.state.defaultCenter}
          zoom={this.state.zoom}
          center={this.state.center}
          cars={this.state.cars}
          getClickedCar={this.getClickedCar}
        />
        <Search
          getCarList={this.getCarList}
        />
        {this.state.clickedCar ? <CarDetails /> : null}
      </React.Fragment>
    );
  }
};

export default App;

// TODO:
// change lat & long min and max to 1? V
// implement haversine V
// render this.cars if it changes
// build map component V
// build car detail component
// make api calls to mark car locations on the map
// css

// challenge 2:
// how to display cars in this.state

// deploy on heroku
// create an instance
// transform: add index to schema.sql
// load: instance