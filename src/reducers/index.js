import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import books from './books';
import localization from './localization';

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  localization,
  books,
});

export default rootReducer;
