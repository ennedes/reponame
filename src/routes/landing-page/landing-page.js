import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/App.css';
import Cards from '../../components/Cards';
import items from '../../utils/movies';

function LandingPage() {
    const [movieItem, setMovieItem] = useState(items);
    console.log(items);
  return (
    <div>
      <div className="App-header">
          <Navbar />
        <h1 className='title'>
          Films. Without Limits.
        </h1>
      </div>

      <div className='cardContainerExt'>
        <ul>
          <li><div><Cards items={movieItem} /></div></li>
        </ul>

      </div>

    </div>
  );
}

export default LandingPage;
