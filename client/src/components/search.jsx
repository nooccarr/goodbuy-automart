import React from 'react';
import axios from 'axios';
import parseAddress from '../../utils/parseAddress.js';
import getMileageMinAndMax from '../../utils/getMileageMinAndMax.js';
import { API_KEY } from '../../utils/googleConfig.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      manufacturer: 'chevrolet',
      mileageMin: 0,
      mileageMax: 10000
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleManufacturersChange = this.handleManufacturersChange.bind(this);
    this.handleMileagesChange = this.handleMileagesChange.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
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

  handleSearchButton() {
    let address = parseAddress(this.state.address);
    // FIXME:
    // return axios
    //   .get('https://maps.googleapis.com/maps/api/geocode/json', {
    //     params: {
    //       address: address,
    //       key: API_KEY
    //     }
    //   })
    //   .then(({ data }) => {
    //     let coordinates = data.results[0].geometry.location;
    //     let { lat, lng } = coordinates;
    //     this.props.getCarList(this.state.manufacturer, lat, lng, this.state.mileageMin, this.state.mileageMax);
    //   })
    //   .catch(err => console.log(err));
    this.props.getCarList(this.state.manufacturer, 40.7474874, -73.752967, this.state.mileageMin, this.state.mileageMax);
  }

  render() {
    const manufacturers = [
      'chevrolet', 'bmw', 'ford', 'toyota', 'jeep', 'ram', 'hyundai', 'honda', 'dodge', 'lexus', 'mercedes-benz', 'cadillac', 'gmc', 'subaru', 'infiniti', 'mazda', 'mini', 'nissan', 'volkswagen', 'kia', 'lincoln', 'mitsubishi', 'buick', 'audi', 'rover', 'chrysler', 'fiat', 'acura', 'volvo', 'pontiac', 'tesla', 'saturn', 'mercury', 'datsun', 'porsche', 'jaguar', 'ferrari', 'alfa-romeo', 'harley-davidson', 'land rover', 'aston-martin', 'morgan', 'hennessey'
    ];
    const mileages = ['0-10,000', '10,001-20,000', '20,001-30,000', '30,001-40,000', '40,001-50,000', '50,001-60,000', '60,001-70,000', '70,001-80,000', '80,001-90,000', '90,001-100,000', '100,001-120,000', '120,001-140,000', '140,001-160,000', '160-001-200,000', '200,000 and up!'];

    return(
      <div>
        {/* {console.log(this.state)} */}
        <h3>Search!</h3>
        <h4>Address</h4>
        <input
          type="text"
          value={this.state.address}
          onChange={e => this.handleAddressChange(e)}
        />
        <h4>Manufacturer</h4>
        <select
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
        <h4>Mileage</h4>
        <select
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
        <button
          onClick={this.handleSearchButton}
        >
          Search
        </button>
      </div>
    );
  }
};

export default Search;