import React from 'react';
import styles from './MainPage.module.css'
import {motion} from "framer-motion";
const MainPage = () => {
  return (
    
       <div className= {`${styles.mainPage} container`}>
        <div className={styles.mainImage}><img src = "images/Home-Rental-Logo.jpg"/></div>
     <div className='title' > <h1>HOME RENTAL HELP</h1></div> 
     <div className={styles.qoute}>
      const text = "Framer Motion is a really cool tool".split(" ");
    {/* {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))} */}
      <p>A Complete solution for Home renting. Where you can find your dream home without even roaming around road. Take a deep breath and dive into the latest helping hand of yours</p>
      <p>Happy Renting Dude! We are always there for you. </p>
     </div>
     <button>Sign Up?</button>
     <p>Or</p>
     
     <button>Log in</button>
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
