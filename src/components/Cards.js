import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Cards = ({ movies }) => {

  return (
      <div className='section'>
            <div className="cardContainer">
                <div className="card border-dark bg-dark mb-3" style={{maxWidth: 18 + 'rem'}}>
                    <div className="card-body bg-dark">
                        <h5 className="card-title" style={{color: 'red'}}>{movies.name}</h5>
                        <div className="card-header bg-dark" style={{color: 'white'}}>
                            {movies.category}
                        </div>
                        <p className="card-text">{movies.description}</p>

                        <div>
                            <Link to="/actors/new">
                                <button className='btn btn-danger'>Add Actor</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Cards;
