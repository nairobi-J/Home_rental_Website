import React from 'react';
import styles from './HomePage.module.css'
import Header from './Header';
import Navbar from './Navbar';


const HomePage = () => {
  return (
    <>
    <Header/>
    <div className={`${styles.homePage} container`}>
    <Navbar/>

 
    </div>

    </>
    
  );
}

export default HomePage;
