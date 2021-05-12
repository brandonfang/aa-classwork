const Game = require('./game');
const GameView = require('./gameView');

document.addEventListener("DOMContentLoaded", () => {
  let canvasElement = document.getElementById("game-canvas");
  let ctx = canvasElement.getContext("2d");
  canvasElement.width = Game.DIM_X;
  canvasElement.height = Game.DIM_Y;

  let game = new Game();
  new GameView(game, ctx).start();
});

