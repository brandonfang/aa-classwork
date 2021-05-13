class View {
  constructor(game, $el) {
    this.game= game;
    this.$el = $el;

    this.setupTowers();
    this.clickTower();
    this.render()
  }

  clickTower() {
    
  }

  // makeMove($tower) {}

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      let $pile = $('<ul>').addClass('pile');
      for (let i = 0; i < 3; i++) {
        let $disc = $('<li>')
        $pile.append($disc);
      }
      this.$el.append($pile);
    }

    $('ul:first-child li:nth-child(1)').addClass('disc-one')
    $('ul:first-child li:nth-child(2)').addClass('disc-two')
    $('ul:first-child li:nth-child(3)').addClass('disc-three')
  }

  render() {
    
  }
}

module.exports = View;
