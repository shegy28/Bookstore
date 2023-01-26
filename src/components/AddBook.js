import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAction } from '../redux/books/books';

const bookcreator = (title, author) => (
  {
    item_id: uuidv4(),
    title,
    author,
    category: 'Fiction',
  }

);

const AddBook = () => {
  const titlevalue = useRef();
  const authorvalue = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const title = titlevalue.current.value;
    const author = authorvalue.current.value;

    if (title !== '' && author !== '') {
      dispatch(addBookAction(bookcreator(title, author)));
      titlevalue.current.value = '';
      authorvalue.current.value = '';
    } else {
      e.preventDefault();
    }
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book Title..." ref={titlevalue} required />
        <input type="text" placeholder="Book Author..." ref={authorvalue} required />
        <button type="button" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
