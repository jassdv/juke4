import { createStore, applyMiddleware } from 'redux';
import  loggerMiddleware from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';
import reducer from './reducers/root-reducer';

//const logger = applyMiddleware(loggerMiddleware,thunkMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(loggerMiddleware,thunkMiddleware)
  ));
