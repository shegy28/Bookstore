import { configureStore } from '@reduxjs/toolkit';
import bookreducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    book: bookreducer,
    category: categoryReducer,
  },
});

export default store;
