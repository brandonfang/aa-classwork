import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;