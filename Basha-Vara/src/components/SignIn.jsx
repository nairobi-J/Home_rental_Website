import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignIn.module.css';
import Header from './Header';

const SignIn = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <>
      <Header />
      <div className={`${styles.signIn} container`}>
        <h2>Login To Your Account!</h2>
        <div className='loginInfo'>
          <p>Name: <input type='Name' /></p>
          <p>Email: <input type='Email' /></p>
          <p>Password: <input type='Password' /></p>
        </div>
        <div>
        <button onClick={() => handleNavigation('/homePage')}>Log in</button>
        </div>
        <div>
          <a href='./forgotPassword'>Forgot Password?</a>
        </div>
      </div>
    </>
  );
};

export default SignIn;
