import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }

  render() {
    return(
      <div>Hello MVP!</div>
    );
  }
}

export default App;

// if user clicks search, make GET request to
// https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}
// then make GET request to /cars with body
// then store data(car list) returned
// then render this.cars if it changes