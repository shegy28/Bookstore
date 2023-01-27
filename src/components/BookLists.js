import React from 'react';
import Book from './Book';

/* eslint-disable react/prop-types */

const BookLists = (props) => {
  const { bookset } = props;
  return (
    <ul className="book-list">
      {bookset.map((eachBook) => (
        <Book key={eachBook.item_id} singleBook={eachBook} />
      ))}
    </ul>

  );
};

export default BookLists;
