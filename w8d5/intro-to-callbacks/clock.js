class Clock {

  constructor() {
    let time = new Date();

    this.hours = time.getHours();
    this.minutes = time.getMinutes();
    this.seconds = time.getSeconds();

    this.printTime();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    // debugger;
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this._incrementSeconds();
    this.printTime();
  }

  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours += 1;
    if (this.hours === 24) {
      this.hours = 0;
    }
  }
  
}

const clock = new Clock();
