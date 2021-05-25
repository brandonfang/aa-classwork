import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  ReactDOM.render(<h3>Pokedex</h3>, root);
});

const getSuccess = (pokemon) => console.log(receiveAllPokemon(pokemon));
fetchAllPokemon().then(getSuccess);