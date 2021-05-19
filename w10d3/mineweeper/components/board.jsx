import React from 'react';
import * as Minesweeper from '../minesweeper';
import Tile from './tile';

class Board extends React.Component {
	constructor(props) {
		super(props)
    this.state = {

    };
	}

	render() {
    // console.log(this.props);
    // console.log(this.props.board);
		return (
			<div>
        {this.props.board.grid.map((row, i) => {
          <div key={i}>
            {console.log(row)}
            {row.map((tile, j) => {
              <Tile 
                key={`${i}, ${j}`}
                updateGame={this.props.updateGame}
                board={this.props.board}
                position={[i, j]}
              />
            })}
          </div>
        })}			 
			</div>
		)
	}
}

export default Board;