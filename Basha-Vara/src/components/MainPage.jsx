import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css';
import { motion } from 'framer-motion';
import AnimatedTextWord from './AnimatedTextWord';
import Header from './Header';
import Navbar from './Navbar';
import Slide from './Slide';
import Listings from './Listings';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const user = useSelector((state) => state.user); // Fetch user from Redux
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token'); // Check if user is logged in

  // Handle navigation logic
  const handleNavigation = (route) => {
    navigate(route);
  };

  // Log pin object for debugging


  return (
    <>
      <Header />
      <div className={styles.mainPage + " container"}>
        <Navbar />
        <div className={styles.mainImage}></div>
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

        {isLoggedIn && user.name ? (
          <>
            {/* Show this if logged in */}
            <button onClick={() => handleNavigation('/signIn')}>Sign In</button>
            <p>Or</p>
            <button onClick={() => handleNavigation('/signUp')}>Sign Up</button>
          </>
        ) : (
          <h1>Welcome,  {user.name}!</h1> // Show this if not logged in
        )}
      </div>
      <Slide />
      <Listings />
    </>
  );
};

export default MainPage;
