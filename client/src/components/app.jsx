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
      // clickedCar: null
      clickedCar: {
        VIN: "1C6HJTAG3LL127591",
        cylinders: "6",
        drive: "4wd",
        fuel: "gas",
        id: 277072,
        image_url: "https://images.craigslist.org/01717_kgxIMSMnPro_0gw0co_600x450.jpg",
        latitude: 40.8,
        longitude: -73.12,
        manufacturer: "jeep",
        model: "gladiator sport pickup 4d 5",
        odometer: 23340,
        paint_color: "silver",
        physical_condition: "good",
        posting_date: "2020-12-01T05:00:00.000Z",
        price: "36990",
        state: "ny",
        title_status: "clean",
        transmission: "other",
        type: "pickup",
        year: 2020
      }
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

// TODO:
// change lat & long min and max to 1? V
// implement haversine V
// render this.cars if it changes V
// build map component V
// build car detail component
// make api calls to mark car locations on the map V
// css

// challenge 1:
// how to get coordination for an address
// challenge 2:
// how to calculate distance between 2 coordinates
// challenge 3:
// how to display cars to google map

// deploy on heroku
// create an instance
// transform: add index to schema.sql
// load: instance