import React from 'react';
import { Link } from 'react-router-dom';
import notflixlogo from '../static/notflixlogo.svg';
import '../styles/App.css';

function Navbar() {

  return (

      <header>
        <Link to="/">
          <img src={notflixlogo} className="App-logo" alt="logo" />
        </Link>

        <div className='nav-items'>

            <Link to='/movies/new'>
              <button className='btn btn-danger'>Add Movie</button>
            </Link>

        </div>

      </header>
  );
}

export default Navbar;
