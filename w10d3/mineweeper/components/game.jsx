import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: new Minesweeper.Board(9, 5),
      message: ""
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, altKeyPressed) {
    if (altKeyPressed) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board});

    if (this.state.board.won()) {
      this.setState({message: "You Won!!!!"})
    }

    if (this.state.board.lost()) {
      this.setState({message: "You Lost :("})
    }
  }

  render() {
    return (
      <div className="game-wrapper">
        <h1>Minesweeper</h1>
        <p>Click to explore a tile.</p>
        <p>Alt + click to flag a tile.</p>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <div class="modal">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default Game;