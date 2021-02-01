import React from 'react';
import Search from './search.jsx';
import Map from './map.jsx';
import CarDetails from './carDetails.jsx';

const Home = ({ defaultCenter, zoom, center, cars, getClickedCar, getCarList, clickedCar, addToFavoriteCar, clickedFavorite }) => (
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
      {clickedCar ? <React.Fragment>
        <button
          className='addToFavorite'
          onClick={addToFavoriteCar}
        >
          {clickedFavorite ? 'added!' : 'add to favorite'}
        </button>
        <CarDetails clickedCar={clickedCar} />
      </React.Fragment> : null}
    </div>
  </div>
);

export default Home;

