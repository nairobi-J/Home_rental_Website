import React from 'react';
import styles from './MainPage.module.css'
import {motion} from "framer-motion";
import AnimatedTextWord from './AnimatedTextWord';
const MainPage = () => {
  return (
    
       <div className= {`${styles.mainPage} container`}>
        <div className={styles.mainImage}><img src = "images/Home-Rental-Logo.jpg"/></div>
     <div className='title' > <h1>HOME RENTAL HELP</h1></div> 
     <div className={styles.qoute}>
      <AnimatedTextWord text="A Complete solution for Home renting. " />
      <AnimatedTextWord text=" Where you can find your dream home without even roaming around road." />
      <AnimatedTextWord text=" Take a deep breath and dive into the latest helping hand of yours" />
      <p> </p>
      <AnimatedTextWord text="Happy Renting Dude! We are always there for you." />
      <p>     </p>
    </div>
   
     <button className='signIn'>Sign In</button>
     {/* <p>Or</p> */}
     
    <a href=''>Don't Have Any Account?</a>
      <div className={styles.help}>
        <button  > <img src = "images/circle-info-solid.svg"/>
      </button>
      <p>HELP</p>
     
      </div>
      <div className={styles.abtus}>
     <button><img   src = "images/about.svg"/></button> 
      <p>ABOUT US</p>
      </div>
    
     
    
    
      
    </div>
    
  );
}

export default MainPage;
