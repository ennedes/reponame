import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Cards = ({ items }) => {

  return (
      <div className='section'>
            <div className="cardContainer">
                <div className="card border-dark bg-dark mb-3" style={{maxWidth: 18 + 'rem'}}>
                    <div className="card-header bg-dark" style={{color: 'white'}}>Category</div>
                        <div className="card-body bg-dark">
                        <h5 className="card-title" style={{color: 'red'}}>Movie Name</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
