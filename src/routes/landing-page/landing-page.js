import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/App.css';
import Cards from '../../components/Cards';
import items from '../../utils/movies';
import getMovies from "../../api/getMovies";
import getCategories from "../../api/getCategories";

function LandingPage() {
    const [movies, setMovies] = useState(items);
    console.log(items);

    useEffect(() => {
        getMovies().then((r) => {
            setMovies(r.response.data);
            return movies;
        });

    }, [])

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
              <li>
                 {movies.map((movie) => {
                    return <Cards movies={movie}> </Cards>;
                 })}
              </li>
          </ul>
      </div>

    </div>
  );
}

export default LandingPage;
