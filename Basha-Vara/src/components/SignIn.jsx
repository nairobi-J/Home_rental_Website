import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css';
import axios from 'axios';
import Header from './Header';
import Navbar from './Navbar';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Login Successful!") {
          handleNavigation('/homePage');
        } else {
          console.log(result.data); 
        }
      })
      .catch(err => console.log(err));
  };
  


  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <>
      <Header />
      <div className={`${styles.signIn} container`}>
      <Navbar/>
        <h2>Login To Your Account!</h2>
        <form onSubmit={handleSubmit} method='POST'>
       
        <div className="loginInfo">
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
      <div className="loginInfo">
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

        <button type='submit'>Log in</button>
        
        <div>
          <a href='./forgotPassword'>Forgot Password?</a>
        </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
