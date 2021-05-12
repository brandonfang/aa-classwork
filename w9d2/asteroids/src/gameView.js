const Util = require('./util');
const Game = require('./game');

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function () {
  setInterval(Game.prototype.moveObjects(), 20);
  setInterval(Game.prototype.draw(), 20);
};

module.exports = GameView;