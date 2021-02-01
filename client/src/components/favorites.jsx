import React from 'react';
import CarDetails from './carDetails.jsx';


const Favorites = ({ favoriteCars, clickedCar }) => {
  if (!favoriteCars.length) {
    return <div>Your Favorites List Empty</div>;
  } else {
    return (
      <div className='favoriteCarsContainer'>
        {favoriteCars.map((favoriteCar, i) => (
          <CarDetails key={i} clickedCar={favoriteCar} />
        ))}
      </div>
    );
  }
};

export default Favorites;