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
      let pile = $('<ul>').addClass('pile');
      $board.append(pile);
    }
    // console.log($('ul.pile').eq(0));
    let $pile1 = $('ul.pile').eq(0);
    $pile1.append($('<li>')).addClass('disc-one');
    $pile1.append($('<li>')).addClass('disc-two');
    $pile1.append($('<li>')).addClass('disc-three');
    
    this.$el.append($board);
  }



  render() {

    
  }
}

module.exports = View;
