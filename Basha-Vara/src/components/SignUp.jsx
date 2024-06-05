import React from 'react';
import styles from './SignUp.module.css'
const SignUp = () => {
  return (
    <div className={`${styles.signUp} container`}>
      <h1>Sign Up!!</h1>
      <div className="info">
      <p>Name:  <input type="name"></input></p>
      <p>Email:  <input type="mail"></input></p>
      <p>Password:  <input type="password"></input></p>
      <p>Phone-No:  <input type="number"></input></p>
      <p>Address:  <input type="address"></input></p>
      
      </div>
      <button>Sign Up</button>
    </div>
  );
}

export default SignUp;
