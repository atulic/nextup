import { combineReducers } from 'redux';
import SongsReducer from "./reducer_songs";
import { authMiddleware, authReducer as auth } from 'redux-implicit-oauth2' 

const rootReducer = combineReducers({
  songs: SongsReducer,
  auth
});

export default rootReducer;
