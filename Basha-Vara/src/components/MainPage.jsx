import React from 'react';
import styles from './MainPage.module.css'
const MainPage = () => {
  return (
    
       <div className= {styles.mainPage}>
     <div className='title'> <h1>Home Rental Help</h1></div> 
     <div className={styles.loginInput}>
     <div className="nameInput">
      <p>Name:  <input type="name"></input></p>
     
     </div>
     <div className="passwordInput">
      <p>Password: <input type='password'></input></p>
      
     </div>
     </div>
      <button>Log in</button>
      <div className="help">
      <img  width= {25} height={48} src = "circle-info-solid.svg"/>
      <p>Help</p>
      </div>
      <div className="Aboutus">
      <img  width= {25} height={48} src = "about.svg"/>
      <p>About Us</p>
      </div>
    
     
    
    
      
    </div>
    
  );
}

export default MainPage;
