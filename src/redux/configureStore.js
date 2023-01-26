import { configureStore,combineReducers,
  applyMiddleware, } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookreducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookreducer,
  category: categoryReducer,
});

const store = configureStore (
  {reducer: rootReducer},
  applyMiddleware(thunk)
)

export default store;
