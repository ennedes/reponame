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
    const Movies = () => {
        if(movies.length > 0){

        }else{
            return <h1>NO MOVIES AVAILABLE</h1>;
        }
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

                  {movies.map((movie) => {
                      return <Cards movieProp={movie} movieId={movie.id}> </Cards>;
                  })}

              </li>
          </ul>
      </div>

    </div>
  );
}

export default LandingPage;
