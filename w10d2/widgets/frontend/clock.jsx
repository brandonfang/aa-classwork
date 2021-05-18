import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this);
    this.zone = new Date().toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]
  }

  tick() {
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    this.id = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
    this.id = 0;
  }

  render() {
    return (
      <div>
        <h2>Clock</h2>
        <div className='clock-wrapper'>
          <div className="clock-row">
            <p>Time:</p>
            <p>{this.state.time.toTimeString().split(' ')[0]} {this.zone}</p>
          </div>
          <div className="clock-row">
            <p>Date:</p>
            <p>{this.state.time.toString().split(' ').slice(0, 4).join(' ')}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
