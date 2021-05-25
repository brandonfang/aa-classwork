import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      for (let index in action.pokemon) {
        nextState[index] = action.pokemon[index];
      }
      return nextState;
    default:
      return state;
  }
};

export default pokemonReducer;