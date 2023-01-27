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
      <h2 className="add-book">ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" ref={titlevalue} required className="input-title" />
        <input type="text" placeholder="Book author" ref={authorvalue} required className="input-author" />
        <button type="button" onClick={handleSubmit} className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
};
export default AddBook;
