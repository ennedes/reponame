import React, { useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import '../../styles/App.css';
import './new-actor-page.css';
import editActorData from "../../api/putActor";

function EditActorPage(props) {

    const { fromActor } = actorFrom.state

    const inputFirstNameRef = useRef('');
    const inputLastNameRef = useRef('');
    const inputGenderRef = useRef('');

    const firstName = inputFirstNameRef.current.value;
    const lastName = inputLastNameRef.current.value;
    // const description = inputDescriptionRef.current.value;
    // const actors = inputActorsRef.current.value;

    /* states required true to abilitate the CTA
    const [titleCheck, setTitleCheck] = useState(false);
    const [genderCheck, setgenderCheck] = useState(false);
    const [descriptionCheck, setDescriptionCheck] = useState(false);
    const [actorsCheck, setActorsCheck] = useState(false); */

    // errors
    const [errorFirstName, setErrorFirstName] = useState(false);
    const [errorLastName, setErrorLastName] = useState(false);
    // const [errorDescription, setErrorDescription] = useState(false);
    // const [errorActors, setErrorActors] = useState(false);

    const validateFirstName = () => {
        if (firstName.length < 1) {
            setErrorFirstName('Required');
        } else {
            setErrorFirstName('');
        }
    };

    const validateLastName = () => {
        if (lastName.length < 1) {
            setErrorLastName('Required');
        } else {
            setErrorLastName('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('HandleSubmit');
    
        const inputData = {
          firstName: inputFirstNameRef.current.value,
          lastName: inputLastNameRef.current.value,
          gender: inputGenderRef.current.value,
          id: from.movieId,
          actorId: from.actorId
        };
    
        console.log('submit', inputData);
        // PUT call
        const formData = new FormData();
        formData.append('inputData', {
          type: 'application/json',
        });
        editActorData(inputData).then((r) => {
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
          } else if (r.error !== undefined && r.error.status === 404) {
            alert('404: Not found');
          } else if (r.response.status !== undefined && r.response.status === 201) {
            console.log('Success!');
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
                 Add an actor
                </h1>
            </header>

            <div className='formContainer'>
                    <form className='actorForm'>
                        <label htmlFor="actorName">First Name:</label><br />
                        <input 
                            className='form-control'
                            type="text" 
                            id="actorName" 
                            name="actorName"
                            onChange={validateFirstName}
                            ref={inputFirstNameRef} 
                        />
                        <span>{errorFirstName}</span>
                        <br />

                        <label htmlFor="actorSurame">Last Name:</label><br />
                        <input 
                            className='form-control'
                            type="text" 
                            id="actorSurame" 
                            name="actorSurame"
                            onChange={validateLastName}
                            ref={inputLastNameRef} 
                        />
                        <span>{errorLastName}</span>
                        <br />

                        <label htmlFor="gender">Gender:</label><br />
                        <select
                            className='form-control'
                            type="text"
                            id="gender"
                            name="gender"
                            ref={inputGenderRef}>
                            <option value=''></option>
                            <option value='0'>Female</option>
                            <option value='1'>Male</option>
                            <option value='2'>Non binary</option>
                        </select><br />
                        <span></span>
                        <Link to="/">
                          <button type='submit' className='btn btn-primary btn-danger' onClick={handleSubmit}>Submit</button>
                        </Link>
                    </form>
                </div>

        </div>
</>
  );
}

export default EditActorPage;
