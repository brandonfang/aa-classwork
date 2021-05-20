import { combineReducers } from 'redux';
import todosReducer from './todos-reducer';
import stepsReducer from './steps-reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer
});

export default rootReducer;