import {React, useState} from 'react';
import styles from './SignUp.module.css'
import axios from 'axios';
import Header from './Header';
import Navbar from './Navbar';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [contact, setContact] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password, contact, address})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
  }



  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };


  return (
    <>
    <Header/>
    <div className={`${styles.signUp} container`}>
    <Navbar/>
      <h2>Create A New Account!</h2>
      <form onSubmit={handleSubmit}>
      <div className="info">

        <label htmlFor='name'>
          
        </label>
      <p><b>Name:  </b><input
                  type="text"
                  autoComplete='off'
                  placeholder='Enter Name'
                  name='name'
                  className='form-control rounded-0'
                  onChange={(e) => setName(e.target.value)}
                  />    
      </p>
      </div>
      <div className="info">
      <label htmlFor='email'>
        
        </label>
      <p>Email:  <input
                   type="mail"
        
                  autoComplete='off'
                  name='email'
                   placeholder='Enter Email'
                   onChange={(e) => setEmail(e.target.value)}
                   />
      </p>
      </div>

      <div className="info">
      <label htmlFor='password'>
          
        </label>
      <p>Password:  <input type="password"
                           autoComplete='off'
                           name='password'
                           placeholder='Enter a Strong Password'
                           onChange={(e) => setPassword(e.target.value)}
                           />
      </p>
      </div>

      <div className="info">
      <label htmlFor='contact'>
        
        </label>
      <p>Contact-No:  <input type="tel"
                             placeholder='Enter Contact No.'
                             name='contact'
                             onChange={(e) => setContact(e.target.value)}
                             />
      </p>
      </div>

      <div className="info">
      <label htmlFor='address'>
         
        </label>

      <p>Address:  <input type="text" 
                          placeholder='Enter Address'
                          name='address'
                          onChange={(e) => setAddress(e.target.value)}
                          />
      </p>
      
      </div>
      <button type='submit' onClick= {() => handleNavigation('/mainPage')}>Sign Up</button>
      </form>
    </div>

    </>
   
  );
}

export default SignUp;
