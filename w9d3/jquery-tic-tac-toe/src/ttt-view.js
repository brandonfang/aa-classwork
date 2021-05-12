class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    console.log('HELP')
    this.bindEvents();
  }

  bindEvents() {
    console.log("Hellooooo")
    let $board = $('.grid');
    $board.on('click', 'li.cell', (e) => {
      let $square = $(e.target);
      this.makeMove($square);
    })
  }

  makeMove($square) {
    if ($square.hasClass('checked')) {
      alert('Invalid move! Try again.');
    } else {
      $square.addClass('checked');
      alert('Hello')
    }
  }

  setupBoard() {
    let $container = $('figure.ttt');
    let $board = $('<ul>').addClass('grid');
    $container.append($board);

    for (let i = 0; i < 9; i++) {
      let $li = $('<li>').addClass('cell');
      $board.append($li);
    }
    this.$el.append($board);
  }
}

module.exports = View;

