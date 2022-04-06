import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import deleteMovie from '../api/deleteMovie';

const Cards = ({ movieProp, movieId }) => {

    const deleteCall = () => {
        deleteMovie(movieId);
        console.log(movieId);
    };

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

                        <div>
                            <Link to="/actors/new">
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
