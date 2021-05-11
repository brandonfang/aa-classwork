const MovingObject = require('./movingObject');
const Util = require('./util');

const STANDARD = {
  COLOR: "#00FF00",
  RADIUS: 50,
  SPEED: 4
}

function Asteroid(options) {
  options = options || {};
  options.pos = options.pos;
  options.vel = options.vel || Util.randomVec(STANDARD.SPEED);
  options.radius = STANDARD.RADIUS;
  options.color = STANDARD.COLOR;
  
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid;