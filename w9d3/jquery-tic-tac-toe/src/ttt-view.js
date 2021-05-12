class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
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
      $square.text(this.game.currentPlayer);
      this.game.playMove($square.data('pos'));
    }
    if (this.game.winner()) {
      // let $container = $('.ttt');
      // let message = `You win, ${this.game.winner()}`
      let $body = $('body')
      $body.append($("<h2>You win, " + `${this.game.winner()}` + "!</h2>"))
      let $squares = $(".cell")
      $squares.each((i, cell) => {
        if ($(cell).hasClass('checked') && $(cell).text() === this.game.winner()) {
         $(cell).addClass('winner');
        } else if ($(cell).hasClass('checked')) {
          $(cell).addClass('loser')
        }
      });
      this.endGame();
    }
  }

  endGame() {
    let $board = $('.grid');
    $board.off('click');
  }

  setupBoard() {
    let $container = $('figure.ttt');
    let $board = $('<ul>').addClass('grid');
    $container.append($board);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let $li = $('<li>').addClass('cell').data('pos', [i, j]);
        $board.append($li);
      }
    }
    this.$el.append($board);
  }
}

module.exports = View;

