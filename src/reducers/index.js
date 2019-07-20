import breweryReducer from './breweryReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  brewery: breweryReducer
})
