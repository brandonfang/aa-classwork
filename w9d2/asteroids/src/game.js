const Util = require('./util');
const MovingObject = require('./movingObject');
const Asteroid = require('./asteroid');

function Game() {
  this.asteroids = this.addAsteroids();
};

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.BG_COLOR = "#000000";
Game.NUM_ASTEROIDS = 100;

Game.prototype.randomPosition = function() {
  return [getRandomInt(0, Game.DIM_X), getRandomInt(0, Game.DIM_Y)];
};

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
  // const canvas = document.getElementById('game-canvas');
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
  for (let i = 0; i < this.asteroids.length; i++) {
    asteroids[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    asteroids[i].move();
  }
}

module.export = Game;