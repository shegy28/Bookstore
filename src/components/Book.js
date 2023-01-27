import React from 'react';
import { useDispatch } from 'react-redux';
import { deletBookAction } from '../redux/books/books';

/* eslint-disable react/prop-types */
/* eslint-disable camelcase */

const Book = ({ singleBook }) => {
  const {
    item_id, title, author, category,
  } = singleBook;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletBookAction(item_id));
  };

  return (

    <li className="eachbook">
      <div className="book">
        <div className="book-headers">
          <h4 className="category">{category}</h4>
          <h2 className="title">{title}</h2>
          <p className="author">{author}</p>
        </div>
        <div className="buttons">
          <span><button type="button">Comments</button></span>
          {' '}
          <hr />
          <span><button type="button" onClick={handleDelete} id={item_id}>Remove</button></span>
          <hr />
          <span><button type="button">Edit</button></span>
        </div>
      </div>
      <div className="details">
        <div className="percetage-complete">
          <div className="completed-circle" />
          <div>
            <p className="t64">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <hr className="complete-line" />
        <div className="chapter-progress">
          <h4 className="current">CURRENT CHAPTER</h4>
          <h4 className="chapter">Chapter 17</h4>
          <button type="button" className="update">UPDATE PROGRESS</button>
        </div>
      </div>

    </li>

  );
};

export default Book;
