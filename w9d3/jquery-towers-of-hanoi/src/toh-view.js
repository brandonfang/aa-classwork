class View {
  constructor(game, $el) {
    this.game= game;
    this.$el = $el;

    this.setupTowers();
    this.clickTower();
    // this.render()
  }

  clickTower() {
    
  }

  // makeMove($tower) {}

  setupTowers() {
    let $board = $('<div>').addClass('board');
    for (let i = 0; i < 3; i++) {
      let $pile = $('<ul>').addClass('pile');
      for (let i = 0; i < 3; i++) {
        let $disc = $('<li>')
        $pile.append($disc);
      }
      $board.append($pile);
    }

    // let $pile1 = $('.board:first-child');
    $('ul li:nth-child(1)').addClass('disc-one')

    // console.log($('ul.pile').eq(0));
    // let $pile1 = $('.pile').eq(0);
    // console.log($pile1)
    // for (let i = 0; i < 3; i++) {
    //   let disc = $('<li>').addClass('disc');
    //   $pile1.append(disc);
    // }

    this.$el.append($board);
  }



  render() {

    
  }
}

module.exports = View;
