import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/App.css';
import Cards from '../../components/Cards';
import items from '../../utils/movies';
import getMovies from '../../api/getMovies';

function LandingPage() {
    const [movieItem, setMovieItem] = useState(items);
    console.log(items);

    const [movies, setMovies] = useState({});
    useEffect(() => {
      getMovies(movies).then((r) => {
        console.log(r.response.data);
        setMovies(r.response.data);
      });
    });

  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
        <h1 className='title'>
          Films. Without Limits.
        </h1>
      </header>

      <div className='cardContainerExt'>
        <ul>
          <li><div><Cards items={movieItem} /></div></li>
        </ul>

      </div>

    </div>
  );
}

export default LandingPage;
