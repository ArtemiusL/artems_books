import { ADD_BOOK, REMOVE_BOOK, EDITING_BOOK } from '_constants/books';

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
      return state.filter(item => item.id !== payload);

    case EDITING_BOOK:
      return state.map(item => (
        (item.id === payload.id) ? ({ ...item, ...payload.newItem }) : item),
      );

    default:
      return state;
  }
};

export default books;
