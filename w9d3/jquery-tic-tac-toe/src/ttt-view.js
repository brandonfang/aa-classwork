class View {
  constructor(game, $el) {
    this.game = game;
    $el.append(this.setupBoard());
  }

  bindEvents() {

  }

  makeMove($square) {

  }

  setupBoard() {
    let $container = $('figure.ttt');
    let $board = $('<ul>').addClass('grid');
    $container.append($board);

    for (let i = 0; i < 9; i++) {
      let $li = $('<li>').addClass('cell');
      $board.append($li);
    }

    return $board;
  }
}

module.exports = View;

