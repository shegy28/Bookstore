import React from 'react'

const Book = (props) => {
  const {singleBook} = props
  return (
    
        <li className='eachbook'>
            <div>
                <h3>{singleBook.title}</h3>
            </div>
            <div>
                <p>{singleBook.author}</p>
                <span><button type='delete'>Delete</button></span>
            </div>
        </li>
    
  )
}

export default Book;
