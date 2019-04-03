import { combineReducers } from 'redux';
import fetchImageReducer from './fetchImageReducer';

export default combineReducers({
  prodimages: fetchImageReducer
});
