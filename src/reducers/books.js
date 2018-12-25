import { ADD_BOOK, REMOVE_BOOK } from '_constants/books';

const books = (state = [], action) => {
  const {
    type,
    payload,
  } = action;

  switch (type) {
    case ADD_BOOK:
      return [
        ...state,
        payload,
      ];

    case REMOVE_BOOK:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

export default books;
