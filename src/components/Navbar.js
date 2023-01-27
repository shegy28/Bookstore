import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';

const Navbar = () => (
  <header>
    <nav>
      <div className="logo-link">
        <div>
          <h1 className="logo">Bookstore CMS</h1>
        </div>
        <ul className="nav-items">
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="category">CATEGORIES</Link></li>
        </ul>
      </div>
      <button className="icon" type="button">
        <IoMdPerson />
      </button>
    </nav>
  </header>
);

export default Navbar;
