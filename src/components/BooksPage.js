import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBookAction } from '../redux/books/books';
import AddBook from './AddBook';
import BookLists from './BookLists';

const BooksPage = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookAction());
  }, [dispatch]);

  return (
    <div className="book-contain">
      <BookLists
        bookset={books}
      />
      <hr className="form-line" />
      <AddBook />
    </div>
  );
};

export default BooksPage;
