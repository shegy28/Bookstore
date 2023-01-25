import React from 'react';
import { useDispatch } from 'react-redux';
import { deletBookAction } from '../redux/books/books';

/* eslint-disable react/prop-types */

const Book = ({singleBook}) => {
  const { id, title , author } = singleBook;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletBookAction(id))
  };

  return (

    <li className="eachbook">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{author}</p>
        <span><button type="button" onClick={handleDelete } id={id}>Delete</button></span>
      </div>
    </li>

  );
};

export default Book;
