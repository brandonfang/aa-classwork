const Util = require('./util');
const MovingObject = require('./movingObject');
const Asteroid = require('./asteroid');

const CONSTS = {
  DIM_X: 1000,
  DIM_Y: 600,
  NUM_ASTEROIDS: 100
};


function game() {
  this.dimX = CONSTS.DIM_X;
  this.dimY = CONSTS.DIM_Y;
  this.numAsteroids = CONSTS.NUM_ASTEROIDS;
  this.asteroids = this.addAsteroids();
}

Game.prototype.randomPosition = function() {
  return [getRandomInt(0, this.dimX), getRandomInt(0, this.dimY)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

Game.prototype.addAsteroids = function() {
  let arr = [];
  for (let i = 0; i < this.numAsteroids; i++) {
    let asteroid = new Asteroid(this.randomPosition);
    arr.push(asteroid);
  }

  return arr;
}

Game.prototype.draw = function(ctx) {
  const canvas = document.getElementById('game-canvas');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < this.asteroids.length; i++) {
    asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    asteroids[i].move();
  }
}