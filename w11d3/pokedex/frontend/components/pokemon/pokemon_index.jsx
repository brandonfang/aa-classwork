import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';
class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    const pokemonItems = this.props.pokemon.map((poke,i) => (
      <PokemonIndexItem className='pokemon-index-item' key={i} poke={poke} />
    ));
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      </section>
    
    )
  }
  }
  
  
  export default PokemonIndex;