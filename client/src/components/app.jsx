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

  getCarList(car) {
    console.log(car);
    return axios
      .get('/cars', { params: car })
      .then(({ data }) => {
        this.setState({
          center: {
            lat: car.latitudeMin + 7.5, //
            lng: car.longitudeMin + 7.5 //
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
          <h1 className="navText">GoodBuy AutoMart</h1>
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
// deploy on heroku
// create an instance
// transform: add index to schema.sql
// load: instance