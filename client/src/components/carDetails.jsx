import React, { useEffect, useState } from 'react';
import moment from 'moment';

const CarDetails = ({ clickedCar, isFavorites, removeFromFavorites }) => {
  let momentAgo = moment(clickedCar.posting_date, 'YYYY-MM-DD').fromNow();
  const [carImage, setCarImage] = useState(clickedCar.image_url);

  useEffect(() => (
    setCarImage(clickedCar.image_url)
  ), [clickedCar])

  return (
    <div className='carDetailsContainer'>
      {isFavorites ? <button
        onClick={() => removeFromFavorites(clickedCar.id)}
        className='removeFavoriteCar'
      >remove</button> : null}
      <div className='postedDate'>Posted {momentAgo}</div>
      <h3 className='carModelAndYear'>{clickedCar.year} {clickedCar.model}</h3>
      <img
        className='carImage'
        src={carImage}
        onError={() => setCarImage('/img/unavailable.jpg')}
        width='350px'
      />
      <div className='carPrice'>price:
        <strong className='carPriceBold'>
          {clickedCar.price}
        </strong>
      </div>
      <div className='carVin'>VIN:
        <strong className='carVinBold'>
          {clickedCar.VIN}
        </strong>
      </div>
      <div className='carTitle'>title:
        <strong className='carTitleBold'>
          {clickedCar.title_status}
        </strong>
      </div>
      <div className='carOdometer'>odometer:
        <strong className='carOdometerBold'>
          {clickedCar.odometer}
        </strong>
      </div>
      <div className='carCondition'>condition:
        <strong className='carConditionBold'>
          {clickedCar.physical_condition}
        </strong>
      </div>
      <div className='carColor'>color:
        <strong className='carColorBold'>
          {clickedCar.paint_color}
        </strong>
      </div>
      <div className='carType'>type:
        <strong className='carTypeBold'>
          {clickedCar.type}
        </strong>
      </div>
      <div className='carDrive'>drive:
        <strong className='carDriveBold'>
          {clickedCar.drive}
        </strong>
      </div>
      <div className='carTransmission'>transmission:
        <strong className='carTransmissionBold'>
          {clickedCar.transmission}
        </strong>
      </div>
      <div className='carCylinders'>cylinders:
        <strong className='carCylindersBold'>
          {clickedCar.cylinders}
        </strong>
      </div>
      <div className='carFuel'>fuel:
        <strong className='carFuelBold'>
          {clickedCar.fuel}
        </strong>
      </div>
    </div>
  );
};

export default CarDetails;