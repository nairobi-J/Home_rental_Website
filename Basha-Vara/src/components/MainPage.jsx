import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css';
import { motion } from 'framer-motion';
import AnimatedTextWord from './AnimatedTextWord';
import Header from './Header';
import Navbar from './Navbar';
import Slide from './Slide';
import Listings from './Listings';

const MainPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  console.log('MainPage rendered');

  return (
    <>
      <Header />
      <div className={styles.mainPage + " container"}>
        <Navbar/>
        <div className={styles.mainImage}>
          {/* <img src="images/Logo.jpg" alt="Home Rental Logo" /> */}
        </div>
        <div className='title'>
          <h1>HOME RENTAL HELP</h1>
        </div>
        <div className={styles.qoute}>
          <AnimatedTextWord text="A Complete solution for Home renting." />
          <AnimatedTextWord text="Where you can find your dream home without even roaming around road." />
          <AnimatedTextWord text="Take a deep breath and dive into the latest helping hand of yours" />
          <p> </p>
          <AnimatedTextWord text="Happy Renting Dude! We are always there for you." />
          <p> </p>
        </div>
        <button onClick={() => handleNavigation('/signIn')}>Sign In</button>
        <p>Or</p>
        <button onClick={() => handleNavigation('/signUp')}>Sign Up</button>
      </div>
      <Slide/>
      <Listings/>
    </>
  );
};

export default MainPage;
