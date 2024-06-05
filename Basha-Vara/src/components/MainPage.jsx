import React from 'react';
import styles from './MainPage.module.css'
const MainPage = () => {
  return (
    
       <div className= {`${styles.mainPage} container`}>
        <div className={styles.mainImage}><img src = "images/Home-Rental-Logo.jpg"/></div>
     <div className='title' > <h1>HOME RENTAL HELP</h1></div> 
     <button>Sign Up?</button>
     <p>Or</p>
     <div className={styles.loginInput}>
     <div className="nameInput">
      <p>Name:  <input type="name"></input></p>
     
     </div>
     <div className="passwordInput">
      <p>Password: <input type='password'></input></p>
      
     </div>
     
     </div>
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
