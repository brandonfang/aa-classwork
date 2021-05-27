import React from 'react'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <li>Name: {this.props.item.name}
        <ul>
          <li>Price: {this.props.item.price}</li>
          <li>Happiness: {this.props.item.happiness}</li>
          <img src={this.props.item.imageUrl}></img>
        </ul>
      </li>

    );
  }
}
 
export default Item;