import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <nav>
            <div>
                <h1 className='logo'>Bookstore CMS</h1>
            </div>
            <ul className='nav-items'>
                <li><Link to ="/">BOOKS</Link></li>
                <li><Link to = "category">CATEGORIES</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;