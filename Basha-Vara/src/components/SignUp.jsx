import React from 'react';
import styles from './SignUp.module.css'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <>
    <Header/>
    <div className={`${styles.signUp} container`}>
      <h2>Create A New Account!</h2>
      <div className="info">
      <p>Name:  <input type="name"></input></p>
      <p>Email:  <input type="mail"></input></p>
      <p>Password:  <input type="password"></input></p>
      <p>Phone-No:  <input type=""></input></p>
      <p>Address:  <input type="address"></input></p>
      
      </div>
      <button onClick= {() => handleNavigation('/mainPage')}>Sign Up</button>
    </div>

    </>
   
  );
}

export default SignUp;
