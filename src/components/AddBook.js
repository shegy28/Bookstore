import React from 'react'

const AddBook = () => {
  return (
    <div>
        <h2>ADD NEW BOOK</h2>
        <form>
            <input type="text" placeholder="Book Title..."/>
            <input type="text" placeholder="Book Author..."/>
            <button>ADD BOOK</button>
        </form>

    </div>
  )
}
export default AddBook;