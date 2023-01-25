import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookLists from './BookLists';

const BooksPage = () => {
  const books = useSelector((state) => state.book);

  return (
    <div>
      <BookLists
        bookset={books}
      />
      <AddBook />
    </div>
  );
};

export default BooksPage;
