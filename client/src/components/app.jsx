import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import ls from 'local-storage';
import Home from './home.jsx';
import Favorites from './favorites.jsx';

const defaultCoordinates = { lat: 40.7282, lng: -73.7949 };

const App = () => {
  // myStorage = window.localStorage;
  const [defaultCenter, setDefaultCenter] = useState(defaultCoordinates);
  const [center, setCenter] = useState(defaultCoordinates);
  const [zoom, setZoom] = useState(8);
  const [cars, setCars] = useState([]);
  const [clickedCar, setClickedCar] = useState(null);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [clickedFavorite, setClickedFavorite] = useState(false);

  useEffect(() => {
    setFavoriteCars(ls.get('favoriteCars') || []);
  }, []);

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
    setClickedFavorite(false);
    setClickedCar(cars[idx]);
  };

  const addToFavoriteCar = () => {
    setClickedFavorite(true);
    if (favoriteCars.every(favoriteCar => favoriteCar.id !== clickedCar.id)) {
      let favorites = [...favoriteCars, clickedCar];
      setFavoriteCars(favorites);
      ls.set('favoriteCars', favorites);
    }
  };

  const removeFromFavorites = (id) => {
    for (let i = 0; i < favoriteCars.length; i++) {
      if (favoriteCars[i].id === id) {
        let favoriteCarsCopy = favoriteCars.slice();
        favoriteCarsCopy.splice(i, 1);
        setFavoriteCars(favoriteCarsCopy);
        ls.set('favoriteCars', favoriteCarsCopy);
      }
    }
  };

  return(
    <React.Fragment>
      <div className='nav'>
        <img className='navLogo' src='./main.png' />
        <h1 className='navText'>GoodBuy AutoMart</h1>
      </div>
      <Router>
        <React.Fragment>
          <ul className='navList'>
            <li>
              <Link
                to="/"
                className='navListItem'
              >Home</Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className='navListItem'
                onClick={() => setClickedFavorite(false)}
              >Favorites</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/favorites">
              <Favorites
                favoriteCars={favoriteCars}
                clickedCar={clickedCar}
                removeFromFavorites={removeFromFavorites}
              />
            </Route>
            <Route path="/">
              <Home
                defaultCenter={defaultCenter}
                zoom={zoom}
                center={center}
                cars={cars}
                getClickedCar={getClickedCar}
                getCarList={getCarList}
                clickedCar={clickedCar}
                addToFavoriteCar={addToFavoriteCar}
                clickedFavorite={clickedFavorite}
              />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
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