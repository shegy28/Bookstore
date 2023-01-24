import React, { useState } from 'react';
import AddBook from './AddBook';
import BookLists from './BookLists';

const BooksPage = () => {
  const [books, setbooks] = useState(
    [],
  );

  const delTodo = (id) => {
    setbooks([
      ...books.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <div>
      <BookLists
        bookset={books}
        delTodo={delTodo}
      />
      <AddBook />
    </div>
  );
};

export default BooksPage;
