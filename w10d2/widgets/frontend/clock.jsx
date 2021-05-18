import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this);
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
    console.log('willunmount')
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.toTimeString().split(' ')[0]}</h1>
        
      </div>
    );
  }
}

export default Clock;
