import rootSelector from './root';
import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  rootSelector,
  ({ books }) => books,
);
