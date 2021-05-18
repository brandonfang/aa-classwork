import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
  }

  tick() {
    const time = new Date();
    this.setState({ time });
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default Clock;
