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
          latitudeMin: latitude - 7.5, // approx. 69 miles
          latitudeMax: latitude + 7.5,
          longitudeMin: longitude - 7.5,
          longitudeMax: longitude + 7.5,
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
        <div className="nav">
          <img
            className="navLogo"
            src="./main.png"
            width="50px"
            height="50px"
          />
          <h1 className="navText">Find your next match</h1>
        </div>
        <div className="app">
          {/* {console.log(this.state)} */}
          <div className="col-2-3">
            <Map
              defaultCenter={this.state.defaultCenter}
              zoom={this.state.zoom}
              center={this.state.center}
              cars={this.state.cars}
              getClickedCar={this.getClickedCar}
            />
          </div>
          <div className="col-1-3">
            <Search
              getCarList={this.getCarList}
            />
            {this.state.clickedCar ? <CarDetails
              clickedCar={this.state.clickedCar}
            /> : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default App;

// change lat & long min and max to 1? V
// implement haversine V
// render this.cars if it changes V
// build map component V
// build car detail component V
// make api calls to mark car locations on the map V
// css V

// challenge 1: V
// how to get coordination for an address
// challenge 2: V
// how to calculate distance between 2 coordinates
// challenge 3: V
// how to display cars to google map

// TODO:
// deploy on heroku
// create an instance
// transform: add index to schema.sql
// load: instance