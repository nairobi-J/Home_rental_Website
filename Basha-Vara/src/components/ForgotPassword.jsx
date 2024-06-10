import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Styles from './ForgotPassword.module.css'

const ForgotPassword = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div>
    <Header/>
    
    <div className={`${Styles.forgotPassword} container`}>
    <img src="images/Logo.jpg" alt="Home Rental Logo" />
      <h1>Forgot Password?</h1>
    <p>Email:  <input></input></p>
    <p>Name:  <input></input></p> 
    <p> </p>
    <button  onClick={() => handleNavigation('/getOtp')}>Get OTP</button>
   
    </div>
  
    </div>
  );
}

export default ForgotPassword;
