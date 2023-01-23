const ADD_BOOK = 'bookstore/book/add';
const DELETE_BOOK = 'bookstore/book/delete';

const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

const deletBookAction = (book) => ({
  type: DELETE_BOOK,
  book,
});

const bookreducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state.push(action.book);

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.book.id);

    default: return state;
  }
};

export { addBookAction, deletBookAction };
export default bookreducer;
