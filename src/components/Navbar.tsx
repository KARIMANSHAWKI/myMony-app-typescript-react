import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: FC = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li className='title'>My Money</li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
