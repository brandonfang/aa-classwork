import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      board: new Minesweeper.Board(9, 5)
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
      <div className="game-wrapper">
        <h1>Minesweeper</h1>
        <p>Click to explore a tile.</p>
        <p>Alt + click to flag a tile.</p>
        <Board board={this.state.board} updateGame={this.updateGame} />
        {/* <div className="tile"></div> */}
      </div>
    );
  }
}

export default Game;