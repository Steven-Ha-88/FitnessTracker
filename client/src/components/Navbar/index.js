import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='navbar-brand'>
        Fitness Tracker
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Exercises
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/create' className='nav-link'>
              Create Exercise Log
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/user' className='nav-link'>
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
