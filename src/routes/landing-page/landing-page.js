import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/App.css';
import Cards from '../../components/Cards';
import items from '../../utils/movies';
import getMovies from "../../api/getMovies";
import getCategories from "../../api/getCategories";

function LandingPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then((r) => {
            setMovies(r.response.data);
            return movies;
        });

    }, [])

    const showMovies = () => {
      movies.map((movie) => {
        return <Cards movieProp={movie} movieId={movie.id}> </Cards>;
      })
    };

  return (
    <div className='background'>
        <Navbar />
      <div className="App-header">

        <h1 className='title'>
          Films. Without Limits.
        </h1>
      </div>

      <div className='cardContainerExt'>
          <ul>
              <li>
                <div>
                  {Object.keys(movies).length === 0 ? (
                    <h2 style={{marginTop: 200 + 'px'}}>No movies yet, add one!</h2>
                    ) : (
                      movies.map((movie) => {
                        return <Cards movieProp={movie} movieId={movie.id}> </Cards>;
                      })
                  )}
                </div>
              </li>
          </ul>
      </div>

    </div>
  );
}

export default LandingPage;
