import React from 'react';
import { withRouter, Route } from 'react-router';
import Item from '../items/item'

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.id);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.id !== this.props.match.params.id){
      this.props.requestSinglePokemon(this.props.match.params.id);
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className='pokemon-detail'>
        <figure>
          <img src={this.props.pokemon.imageUrl} />
        </figure>
        {this.props.pokemon.name}
        <ul>
          {this.props.items.map((item, i) => 
            <Item key={i} item={item} />
          )}
        </ul>
        <ul>
          {this.props.moves.map((move, i) => 
            <li key={i}>{move}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;

