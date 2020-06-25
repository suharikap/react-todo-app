  
import { combineReducers } from 'redux';
import todo from './todo';
import form from './form';

const reducer = combineReducers({
  todo, form
});

export default reducer;