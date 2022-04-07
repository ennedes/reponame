import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router'; 
import '../styles/App.css';
import deleteMovie from '../api/deleteMovie';
import getActors from '../api/getActors';

const Cards = ({ movieProp, movieId, actorId }) => {

    // const history = useHistory();

    const [actors, setActors] = useState([]);

    const deleteCall = () => {
        deleteMovie(movieId);
        // history.go(0);
    };

    useEffect(() => {

        getActors(movieId).then((r) => {
            setActors(r.response.data);

            return actors;
        });
  
    }, [])


  return (
      <div className='section'>
            <div className="cardContainer">
                <div className="card border-dark bg-dark mb-3" style={{maxWidth: 18 + 'rem'}}>
                    <div className="card-body bg-dark">
                        <h5 className="card-title" style={{color: 'red'}}>{movieProp.name}</h5>
                        <div className="card-header bg-dark" style={{color: 'white'}}>
                            {movieProp.category}
                        </div>
                        <p className="card-text">{movieProp.description}</p>

                            {actors.map((actor) => {
                            return <p className="card-text">
                                <Link to={'/movies/'+ movieId + '/actors' + actorId + '/edit'} state={{ from: {movieProp}} }> 
                                    {actor.firstName} {actor.lastName}
                                </Link>
                                </p>;
                            })}

                        <div>
                            <Link to={'/movies/'+movieId+'/actors/new'} state={{ from: {movieId} }}>
                                <button className='btn btn-outline-light'>Add Actor</button>
                            </Link>
                        </div>
                        <div>
                            <button className='btn red btn-danger' onClick={deleteCall}>Delete</button>
                        </div>
                        <div>
                            <Link to={'/movies/'+ movieId + '/edit'} state={{ from: {movieProp} }}>
                                <button className='btn btn-secondary'>Edit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Cards;
