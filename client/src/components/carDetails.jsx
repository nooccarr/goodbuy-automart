import React from 'react';
import moment from 'moment';

const CarDetails = ({ clickedCar }) => {
  let momentAgo = moment(clickedCar.posting_date, 'YYYY-MM-DD').fromNow();

  return (
    <div>
      <div>Posted {momentAgo}</div>
      <h3>{clickedCar.year} {clickedCar.model}</h3>
      <img src={clickedCar.image_url} />
      <div>price: <strong>{clickedCar.price}</strong></div>
      <div>VIN: <strong>{clickedCar.VIN}</strong></div>
      <div>title: <strong>{clickedCar.title_status}</strong></div>
      <div>odometer: <strong>{clickedCar.odometer}</strong></div>
      <div>condition: <strong>{clickedCar.physical_condition}</strong></div>
      <div>color: <strong>{clickedCar.paint_color}</strong></div>
      <div>type: <strong>{clickedCar.type}</strong></div>
      <div>drive: <strong>{clickedCar.drive}</strong></div>
      <div>transmission: <strong>{clickedCar.transmission}</strong></div>
      <div>cylinders: <strong>{clickedCar.cylinders}</strong></div>
      <div>fuel: <strong>{clickedCar.fuel}</strong></div>
    </div>
  );

};

export default CarDetails;