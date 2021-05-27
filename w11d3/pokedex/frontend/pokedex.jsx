import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import pokemonReducer from './reducers/pokemon_reducer';
import itemsReducer from './reducers/items_reducer';
import movesReducer from './reducers/moves_reducer';
import { requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions'
import { selectPokemonMovesNames }from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestSinglePokemon = requestSinglePokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.pokemonReducer = pokemonReducer;
  window.itemsReducer = itemsReducer;
  window.movesReducer = movesReducer;
  window.selectPokemonMovesNames = selectPokemonMovesNames;

  ReactDOM.render(<Root store={store} />, rootEl)
})