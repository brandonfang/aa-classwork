import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let text = ""
    let className = 'tile'

    if (this.props.tile.explored ) {
      className += ' explored'
      if (this.props.tile.adjacentBombCount() > 0) {
        text = `${this.props.tile.adjacentBombCount()}`
      };
    };
    if (this.props.tile.flagged) {
      text = '⚑';
      className += ' flagged'
    }
    if (this.props.tile.bombed && this.props.tile.explored) {
      text = '☢';
      className += ' bombed'
    }

    return (
      <div className={className} onClick={this.handleClick}>{text}</div>
    )
  }

  handleClick(event) {
    event.preventDefault();
    this.props.updateGame(this.props.tile, event.altKey)
  }

}

export default Tile;