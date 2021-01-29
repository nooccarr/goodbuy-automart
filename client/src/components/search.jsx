import React from 'react';
import axios from 'axios';
import parseAddress from '../../utils/parseAddress.js';
import parseDistance from '../../utils/parseDistance.js';
import getMileageMinAndMax from '../../utils/getMileageMinAndMax.js';
import { GEO_API } from '../../utils/googleConfig.js';

const distances = [
  '5 Miles from', '10 Miles from', '20 Miles from', '30 Miles from', '40 Miles from', '60 Miles from', '100 Miles from', '150 Miles from', '250 Miles from', '500 Miles from'
];

const manufacturers = [
  'chevrolet', 'bmw', 'ford', 'toyota', 'jeep', 'ram', 'hyundai', 'honda', 'dodge', 'lexus', 'mercedes-benz', 'cadillac', 'gmc', 'subaru', 'infiniti', 'mazda', 'mini', 'nissan', 'volkswagen', 'kia', 'lincoln', 'mitsubishi', 'buick', 'audi', 'rover', 'chrysler', 'fiat', 'acura', 'volvo', 'pontiac', 'tesla', 'saturn', 'mercury', 'datsun', 'porsche', 'jaguar', 'ferrari', 'alfa-romeo', 'harley-davidson', 'land rover', 'aston-martin', 'morgan', 'hennessey'
];

const mileages = [
  '0-10,000 mi', '10,001-20,000 mi', '20,001-30,000 mi', '30,001-40,000 mi', '40,001-50,000 mi', '50,001-60,000 mi', '60,001-70,000 mi', '70,001-80,000 mi', '80,001-90,000 mi', '90,001-100,000 mi', '100,001-120,000 mi', '120,001-140,000 mi', '140,001-160,000 mi', '160,001-200,000 mi', '200,000 mi+'
];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '5 Miles from',
      address: '',
      manufacturer: 'chevrolet',
      mileageMin: 0,
      mileageMax: 10000
    };
    this.handleManufacturersChange = this.handleManufacturersChange.bind(this);
    this.handleMileagesChange = this.handleMileagesChange.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleManufacturersChange(e) {
    this.setState({
      manufacturer: e.target.value
    });
  }

  handleMileagesChange(e) {
    let mileageRange = getMileageMinAndMax(e.target.value);
    this.setState({
      mileageMin: mileageRange.min,
      mileageMax: mileageRange.max
    });
  }

  handleDistanceChange(e) {
    this.setState({
      distance: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleSearchButton() {
    let address = parseAddress(this.state.address);
    let distance = parseDistance(this.state.distance);
    return axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: GEO_API
        }
      })
      .then(({ data }) => {
        let coordinates = data.results[0].geometry.location;
        let { lat, lng } = coordinates;
        this.props.getCarList({
          manufacturer: this.state.manufacturer,
          latitudeMin: lat - 7.5, // 1 = approx. 69 miles
          latitudeMax: lat + 7.5,
          longitudeMin: lng - 7.5,
          longitudeMax: lng + 7.5,
          mileageMin: this.state.mileageMin,
          mileageMax: this.state.mileageMax,
          distance: distance
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <React.Fragment>
        {/* {console.log(this.state)} */}
        <h3 className="searchByMakeText">Search by Make</h3>
        <select
          className="manufacturersDropdown"
          name="manufacturers"
          onChange={e => this.handleManufacturersChange(e)}
        >
          {manufacturers.map((manufacturer, idx) => {
            return (<option
              value={manufacturer}
              key={idx}
            >
              {manufacturer}
            </option>);
          })}
        </select>
        <select
          className="mileagesDropdown"
          name="mileage"
          onChange={e => this.handleMileagesChange(e)}
        >
          {mileages.map((mileage, idx) => {
            return (<option
              value={mileage}
              key={idx}
            >
              {mileage}
            </option>);
          })}
        </select>
        <select
          className="distancesDropdown"
          name="distance"
          onChange={e => this.handleDistanceChange(e)}
        >
          {distances.map((distance, idx) => {
            return (<option
              value={distance}
              key={idx}
            >
              {distance}
            </option>)
          })}
        </select>
        <input
          className="addressBar"
          type="text"
          value={this.state.address}
          onChange={e => this.handleAddressChange(e)}
        />
        <button
          className="searchButton"
          onClick={this.handleSearchButton}
        >
          Search
        </button>
      </React.Fragment>
    );
  }
};

export default Search;