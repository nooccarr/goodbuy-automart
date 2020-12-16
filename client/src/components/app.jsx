import React from 'react';
import Search from './search.jsx';
import Map from './map.jsx';
import CarDetails from './carDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  render() {
    return(
      <React.Fragment>
        <h1>Used Car Finder</h1>
        <Map />
        <Search />
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
