import { ADD_BOOK, REMOVE_BOOK } from './constants/books';


export const addBook = (id, title, author, description) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    author,
    description,
  },
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

