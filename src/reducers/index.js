import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './users';
import books from './books';
import localization from './localization';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  routing: routerReducer,
  users,
  localization,
  books,
  visibilityFilter,
});

export default rootReducer;
