import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({poke}) => {
  return (
    <li className="pokemon-index-item">
      <Link to={`/pokemon/${poke.id}`}>
        <span>{poke.id}</span>
        <img src={poke.imageUrl}/>
        <span>{poke.name}</span>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;