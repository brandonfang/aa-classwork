import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

function applyMiddlewares(store, ...middlewares) {
  let dispatch = store.dispatch;
  middlewares.forEach((middleware) => {
    dispatch = middleware(store)(dispatch);
  })
  return Object.assign({}, store, { dispatch })
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(
    rootReducer, 
    preloadedState, 
    applyMiddleware(addLoggingToDispatch)
  );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
