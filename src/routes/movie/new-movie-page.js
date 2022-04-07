import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/App.css';
import './new-movie-page.css';
import movieData from "../../api/addMovie";
import getCategories from "../../api/getCategories";

function NewMoviePage() {

    const navigate = useNavigate();

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

    // errors
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorCategory, setErrorCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    // const [errorDescription, setErrorDescription] = useState(false);
    // const [errorActors, setErrorActors] = useState(false);

    const validateTitle = () => {
        if (title.length <1) {
            setErrorTitle('Required');
        } else {
            setErrorTitle('');
        }
    };

    const validateCategory = () => {
        if (category.length <1) {
            setErrorCategory('Required');
        } else {
            setErrorCategory('');
        }
    };

    useEffect(() => {
        getCategories().then((r) => {
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
          description: inputDescriptionRef.current.value
        };
    
        console.log('submit', inputData);
        // POST call
        const formData = new FormData();
        formData.append('inputData', {
          type: 'application/json',
        });
        movieData(inputData).then((r) => {
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
            navigate('/', { replace: true})
            console.log(r.response.data);
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
                 Add a movie
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

export default NewMoviePage;
