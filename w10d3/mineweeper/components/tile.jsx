import React from 'react';
import * as Minesweeper from '../minesweeper';

console.log("adsfasdf");

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // tile: new Minesweeper.Tile(this.props.board, this.props.position)
      
    };
  }

  render() {
    console.log("qwerqwer");
    // const textContent = (status === 'bombed') ? {&#9873;} : {&#9873;
    // new Minesweeper.Tile()
    console.log(this.props);
    // if (this.state.tile.bombed)

    return (
      <div className='tile'>
        <h1>Hello world</h1>
      </div>
    );
  }

}

export default Tile;