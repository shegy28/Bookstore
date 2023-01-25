import React, { useState } from 'react';
import AddBook from './AddBook';
import BookLists from './BookLists';
import { useSelector } from 'react-redux';
const BooksPage = () => {
  const books = useSelector((state) => state.book)

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
