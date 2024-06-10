import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css';
import { motion } from 'framer-motion';
import AnimatedTextWord from './AnimatedTextWord';
import Header from './Header';

const MainPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <>
      <Header />
      <div className={`${styles.mainPage} container`}>
        <div className={styles.mainImage}>
          <img src="images/Logo.jpg" alt="Home Rental Logo" />
        </div>
        <div className='title'>
          <h1>HOME RENTAL HELP</h1>
        </div>
        <div className={styles.qoute}>
          <AnimatedTextWord text="A Complete solution for Home renting. " />
          <AnimatedTextWord text=" Where you can find your dream home without even roaming around road." />
          <AnimatedTextWord text=" Take a deep breath and dive into the latest helping hand of yours" />
          <p> </p>
          <AnimatedTextWord text="Happy Renting Dude! We are always there for you." />
          <p> </p>
        </div>

        <button onClick={() => handleNavigation('/signIn')}>Sign In</button>
        <p>Or</p>
        <button onClick={() => handleNavigation('/signUp')}>Sign Up</button>

       
      
      </div>
    </>
  );
};

export default MainPage;
