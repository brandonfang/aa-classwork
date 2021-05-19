import React from 'react';
import * as Minesweeper from '../minesweeper';

class Board extends React.Component {
	constructor(props) {
			super(props)
	}

	render() {
		return (
			 <div>
				 {this.props.board.map( (row,i) => {
					 <div key={i}>
						 {row.map( (tile,j) => {
							 <Tile 
							 key={`${i}, ${j}`} 
							 updateGame={this.props.updateGame}
							 />
						 } )}
					 </div>
				 } )	
				 }			 
			 </div>
		)
	}
}

export default Board;