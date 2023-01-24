import initialState from "../initialState/initialState";

const ADD_BOOK = 'addbook';
const DELETE_BOOK = 'deletebook';

const addBookAction = (book) => {
    return {
        type: ADD_BOOK,
        book,
    }
};

const deletBookAction = (index)=> {
    return {
        type: DELETE_BOOK,
        index,
    }
};

const bookreducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return[...state, book];

    case DELETE_BOOK:
      return [...state.slice(0,action.index), ...state.slice(action.index + 1, state.length)];

    default: return state;
  }
};

export { addBookAction, deletBookAction };
export default bookreducer;
