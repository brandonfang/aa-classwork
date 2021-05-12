const View = require('./ttt-view') // require appropriate file
const Game = require('./game') // require appropriate file

$(() => {
  // Your code here
  let game = new Game();
  let $el = $('.ttt');
  let view = new View(game, $el);
});
