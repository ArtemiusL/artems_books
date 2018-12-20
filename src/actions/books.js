import { ADD_BOOK, REMOVE_BOOK } from './constants/books';


export const addBooks = (id, title, author, description) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    author,
    description,
  },
});

export const remBooks = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

