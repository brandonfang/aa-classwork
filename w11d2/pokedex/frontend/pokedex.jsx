import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store'
import { selectAllPokemon } from './reducers/selectors'
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  ReactDOM.render(<Root store={store}/>, root);
});

const getSuccess = (pokemon) => console.log(receiveAllPokemon(pokemon));
fetchAllPokemon().then(getSuccess);