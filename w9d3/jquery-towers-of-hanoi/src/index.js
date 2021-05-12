const View = require('./toh-view');// require appropriate file
const Game = require('./game') // require appropriate file

$(() => {
  // Your code here
  let game = new Game();
  let $el = $('.toh');
  let view = new View(game, $el);
});
