import React from 'react';
import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <div className={`${styles.homePage} container`}>
        
     <nav className={styles.homeNav}>
     <input value= 'search here'>
     </input>
     <img src = "images/search.svg"/>
        <ul>
            <li>Home</li>
            <li>Profile</li>
            

        </ul>
     </nav>

    </div>
  );
}

export default HomePage;
