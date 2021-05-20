// import { createStore } from 'redux';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    default:
      return state;
  }
};

export default todosReducer;