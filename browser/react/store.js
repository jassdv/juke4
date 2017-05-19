import { createStore, applyMiddleware, combineReducers } from 'redux';
import  loggerMiddleware from 'redux-logger';
import  thunkMiddleware from 'redux-thunk';
//import reducer from './reducers/root-reducer
import lyricsReducer from './reducers/lyrics-reducer'
import playerReducer from './reducers/player-reducer'

//const logger = applyMiddleware(loggerMiddleware,thunkMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer,
  }), composeEnhancers(applyMiddleware(loggerMiddleware,thunkMiddleware)
  ));
