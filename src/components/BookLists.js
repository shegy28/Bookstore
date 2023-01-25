import React from 'react';
import Book from './Book';

/* eslint-disable react/prop-types */

const BookLists = (props) => {
  const { bookset } = props;
  return (
    <ul>
      {bookset.map((eachBook) => (
        <Book key={eachBook.id} singleBook={eachBook} />
      ))}
    </ul>

  );
};

export default BookLists;
