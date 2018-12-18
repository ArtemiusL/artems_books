import { ADD_BOOK, REMOVE_BOOK } from './constants/books';


export const addBooks = (value, id) => ({
  type: ADD_BOOK,
  payload: value,
  id,
});

export const remBooks = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

