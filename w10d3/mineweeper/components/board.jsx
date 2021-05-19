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
		return (
			<div className="board">
        {this.props.board.grid.map((row, i) => {
          return (<div key={i} className="row">
            
            {row.map((tile, j) => {
              return (<Tile 
                tile={tile}
                key={`${i}, ${j}`}
                updateGame={this.props.updateGame}
              />)
            })}

          </div>)
        })}			 
			</div>
		)
	}
}

export default Board;