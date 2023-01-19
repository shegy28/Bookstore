
import React, { useState } from 'react';
import AddBook from './AddBook';
import BookLists from './BookLists';
const BooksPage = () => {
  const [books , setbooks] = useState(
    [
      {
        id: 1,
        title: "Setup development environment",
        author: "mayer"
      },
      {
        id: 2,
        title: "Develop website and add content",
        author: "Cast"
      },
      {
        id: 3,
        title: "Deploy to live server",
        author: "halfcast"
      }
    ]
  );

  const delTodo = id => {
    setbooks([
      ...books.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

 
  return (
    <div>
      <BookLists bookset ={books}
        delTodo = {delTodo} 
      />
      <AddBook />
    </div>
  )
}

export default BooksPage