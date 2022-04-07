import React, {useEffect, useState} from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import Cards from '../../components/Cards';
import items from '../../utils/movies';
import getMovies from "../../api/getMovies";
import getCategories from "../../api/getCategories";

function ErrorPage() {

  return (
    <div className='background'>
        <Navbar />
      <div className="App-header">

        <h1 className='title'>
          Ops. Seems like you got lost.
        </h1>
        <Link to='/'>
            <button className='btn btn-primary btn-danger'>Back on track</button>
        </Link>
      </div>

    </div>
  );
}

export default ErrorPage;
