import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      weather: null
    }
  }

  render() {
    return (
      <div>
        <h2>Weather</h2>
        <div className='weather-wrapper'>
          <p>Loading weather...</p>
        </div>
      </div>
    );
  }
}

export default Weather;

// This is our API key; please use your own!
// var apiKey = 'f816d7f39052e3a98b21952097a43076';
// url += '&APPID=' + apiKey;
// var url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?';