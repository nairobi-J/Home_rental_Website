import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Styles from './GetOtp.module.css'
import Navbar from './Navbar';
const GetOtp = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };
  return (
    <div>
    <Header/>
    <Navbar/>
  
    <div className={`${Styles.getOtp} container`}>
    <img src="images/Logo.jpg" alt="Home Rental Logo" />
      <h1>Forgot Password?</h1>
    <p>OTP:  <input></input></p>
    <p>New Password:  <input></input></p> 
    <p> </p>
    <button  onClick={() => handleNavigation('/mainPage')}>Confirm</button>
   
    </div>
  
    </div>
  );
}

export default GetOtp;