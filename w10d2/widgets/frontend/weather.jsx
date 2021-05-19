import React from 'react';

class Weather extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div>
        <h2>Weather</h2>
        <div className='weather-wrapper'>
          <p>The weather is sunny.</p>
        </div>
      </div>
    );
  }
}

export default Weather;