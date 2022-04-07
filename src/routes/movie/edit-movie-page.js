import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import '../../styles/App.css';
import './new-movie-page.css';
import editMovieData from "../../api/putMovie";
import getCategories from "../../api/getCategories";

function EditMoviePage(props) {

    const location = useLocation()
    const { from } = location.state

    console.log(location.state);

    const inputTitleRef = useRef('');
    const inputCategoryRef = useRef('');
    const inputDescriptionRef = useRef('');
    const inputActorsRef = useRef('');

    const title = inputTitleRef.current.value;
    const category = inputCategoryRef.current.value;
    // const description = inputDescriptionRef.current.value;
    // const actors = inputActorsRef.current.value;

    /* states required true to abilitate the CTA
    const [titleCheck, setTitleCheck] = useState(false);
    const [categoryCheck, setCategoryCheck] = useState(false);
    const [descriptionCheck, setDescriptionCheck] = useState(false);
    const [actorsCheck, setActorsCheck] = useState(false); */


    useEffect(() => {
        getCategories(category).then((r) => {
            setCategories(r.response.data);
            return categories;
        });

    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('HandleSubmit');
    
        const inputData = {
          name: inputTitleRef.current.value,
          category: inputCategoryRef.current.value,
          description: inputDescriptionRef.current.value,
          id:from.movieProp.id
        };
    
        console.log('submit', inputData);
        // PUT call
        const formData = new FormData();
        formData.append('inputData', {
          type: 'application/json',
        });
        editMovieData(inputData).then((r) => {
          console.log('next step');
          const response = r;
          window.prova = r;
          if ((response.error !== undefined && response.error.status >= 500) || response.response === undefined) {
            console.log('error >= 500');
            alert('500: Something went wrong. Please try again later');
          } else if (r.error !== undefined && r.error.status === 401) {
            console.log('error 401');
            alert('401: Something went wrong. Please try again later');
          } else if (r.error !== undefined && r.error.status === 400) {
            alert('400: Something went wrong. Please try again later');
          } else if (r.response.status !== undefined && r.response.status === 201) {
            console.log('Success!');
            console.log(r.response.data);
            navigate('/');
          }
          console.log(r);
        }).catch((e) => {
          console.log('Fail ', e);
        });
    
    };
    

  return (
    <>
        <div className="App">
            <header className="App-header">
                <Navbar />
                <h1 className='title'>
                 Edit {from.movieProp.name}
                </h1>
            </header>

            <div className='formContainer'>
                    <form className='movieForm'>
                        <label htmlFor="movieTitle">Movie Title:</label><br />
                        <input 
                            className='form-control'
                            type="text" 
                            id="movieTitle" 
                            name="movieTitle"
                            onChange={validateTitle}
                            ref={inputTitleRef} 
                        />
                        <span>{errorTitle}</span>
                        <br />

                        <label htmlFor="movieTitle">Category:</label><br />
                        <select
                            className='form-control'
                            type="text"
                            id="category"
                            name="category"
                            ref={inputCategoryRef}
                            onChange={validateCategory}>
                            {categories.map((val, i) => <option key={i} value={i}>{val}</option>)}
                        </select><br />
                        <span>{errorCategory}</span>

                        <label htmlFor="movieTitle">Description:</label><br />
                        <textarea
                            className='form-control'
                            type="text" 
                            id="description"
                            name="description"
                            ref={inputDescriptionRef}
                        />
                        <br />

                        <button type='submit' className='btn btn-primary btn-danger' onClick={handleSubmit}>Submit</button>
                    </form>
                </div>

        </div>
</>
  );
}

export default EditMoviePage;
