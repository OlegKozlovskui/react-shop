import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import phones from './phones';

export default combineReducers({
  phones,
  routing
})