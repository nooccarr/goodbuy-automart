import React, { useState } from 'react';
import axios from 'axios';
import Map from './map.jsx';
import Search from './search.jsx';
import CarDetails from './carDetails.jsx';

const defaultCoordinates = { lat: 40.7282, lng: -73.7949 };

const App = () => {
  const [defaultCenter, setDefaultCenter] = useState(defaultCoordinates);
  const [center, setCenter] = useState(defaultCoordinates);
  const [zoom, setZoom] = useState(8);
  const [cars, setCars] = useState([]);
  const [clickedCar, setClickedCar] = useState(null);
  const [favoriteCars, setFavoriteCars] = useState([]);

  const getCarList = (car) => {
    return axios
      .get('/cars', { params: car })
      .then(({ data }) => {
        setCenter({
          lat: car.latitude,
          lng: car.longitude
        });
        setCars(data);
      })
      .catch(err => console.log(err));
  };

  const getClickedCar = (idx) => {
    setClickedCar(cars[idx]);
  };

  const addToFavoriteCar = (id) => {
    if (favoriteCars.every(favoriteCar => favoriteCar.id !== id)) {
      setFavoriteCars([...favoriteCars, clickedCar]);
    }
  }

  return(
    <React.Fragment>
      {console.log(favoriteCars)}
      <div className='nav'>
        <img className='navLogo' src='./main.png' />
        <h1 className='navText'>GoodBuy AutoMart</h1>
      </div>
      <div className='app'>
        <div className='col-2-3'>
          <Map
            defaultCenter={defaultCenter}
            zoom={zoom}
            center={center}
            cars={cars}
            getClickedCar={getClickedCar}
          />
        </div>
        <div className='col-1-3'>
          <Search getCarList={getCarList} />
          {clickedCar ? <CarDetails
            clickedCar={clickedCar}
            addToFavoriteCar={addToFavoriteCar}
          /> : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;

// TODO:
// deploy on heroku
// -create an instance
// -transform: add index to schema.sql
// -load: instance

// implement google direction API
// create favorite (routing for favorite)