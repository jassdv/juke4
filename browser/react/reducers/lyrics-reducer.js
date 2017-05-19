import { SET_LYRICS } from '../constants';

const initialState = { text: '' };

export default function lyricsReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_LYRICS':
      return Object.assign({}, state, { text: action.lyric });
      break;

    default: return state;
  }
}
