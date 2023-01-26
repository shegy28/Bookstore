import { createAsyncThunk } from '@reduxjs/toolkit';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AMbn2x4nWFRrS3L1Q4cn/books';

const ADD_BOOK = 'addbook';
const DELETE_BOOK = 'deletebook';
const GET_BOOKS = 'GET_BOOKS';

const addBookAction = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  },
)

const deletBookAction = createAsyncThunk(
  DELETE_BOOK,
  async (id , {dispatch}) => {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_BOOK,
      payload: {id},
    })
  }
);

const getBookAction = createAsyncThunk(
  GET_BOOKS,
  async (post, {dispatch}) => {
    const response = await fetch(URL);
    const data = await response.json();
    const books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));
    dispatch({
      type: GET_BOOKS,
      payload: books
    })
  }
)

const bookreducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case DELETE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.id);

    case GET_BOOKS:
      return action.payload;

    default: return state;
  }
};

export { addBookAction, deletBookAction, getBookAction };
export default bookreducer;
