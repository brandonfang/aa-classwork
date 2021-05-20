import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

// const store = createStore(rootReducer);
const configureStore = (preLoadedState = {}) => {
  return createStore(rootReducer, preLoadedState)
}

export default configureStore;