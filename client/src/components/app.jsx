import React from 'react';
import axios from 'axios';
import Map from './map.jsx';
import Search from './search.jsx';
import CarDetails from './carDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
    this.getCarList = this.getCarList.bind(this);
  }

  getCarList(manufacturer, latitude, longitude, mileageMin, mileageMax) {
    return axios
      .get('/cars', {
        params: {
          manufacturer: manufacturer,
          latitudeMin: latitude - 0.17, // approx. 12 miles
          latitudeMax: latitude + 0.17,
          longitudeMin: longitude - 0.17,
          longitudeMax: longitude + 0.17,
          mileageMin: mileageMin,
          mileageMax: mileageMax
        }
      })
      .then(({ data }) => {
        this.setState({
          cars: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <React.Fragment>
        {console.log(this.state)}
        <h1>Used Car Finder</h1>
        <Map />
        <Search
          getCarList={this.getCarList}
        />
        <CarDetails />
      </React.Fragment>
    );
  }
};

export default App;

// TODO: if user clicks search, make GET request to
// https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}
// then make GET request to /cars with body
// then store data(car list) returned
// then render this.cars if it changes

// challenge 1:
// how to calculate distance between the address and cars
// challenge 2:
// how to display cars in this.state
