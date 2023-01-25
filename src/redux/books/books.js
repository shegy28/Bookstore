import initialState from '../initialState/initialState';

const ADD_BOOK = 'addbook';
const DELETE_BOOK = 'deletebook';

const addBookAction = (book) => ({
  type: ADD_BOOK,
  book,
});

const deletBookAction = (index) => ({
  type: DELETE_BOOK,
  index,
});

const bookreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case DELETE_BOOK:
      return [...state.filter((book) => book.id !== action.index)];

    default: return state;
  }
};

export { addBookAction, deletBookAction };
export default bookreducer;
