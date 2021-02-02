import React from 'react';
import CarDetails from './carDetails.jsx';


const Favorites = ({ favoriteCars, clickedCar, removeFromFavorites }) => (
  <div className='favoriteCarsContainer'>
    {(() => {
      if (!favoriteCars.length) {
        return (
          <div className='favoriteCarsEmpty'>
            your favorite list is empty.
          </div>
        );
      } else {
        return (
          favoriteCars.map((favoriteCar, i) => (
            <CarDetails
              key={i}
              clickedCar={favoriteCar}
              isFavorites='true'
              removeFromFavorites={removeFromFavorites}
            />
          ))
        );
      }
    })()}
  </div>
);

export default Favorites;