import { combineReducers } from 'redux';

import githubReducer from './githubReducer.js';

export default combineReducers({
  github: githubReducer,
});
