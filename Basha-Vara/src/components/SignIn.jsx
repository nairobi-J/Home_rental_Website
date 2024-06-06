import React from 'react';
import styles from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={`${styles.signIn} container`}>
        <h1>Login To Your Account!</h1>
        <div className='loginInfo'>
            <p>Name: <input type='Name'></input></p>
            <p>Email: <input type='Email'></input></p>
            <p>Password: <input type='Password'></input></p>
        </div>

        <div>
            <button>Sign In</button>
        </div>

        <div>
           <a href=''>Forget Password?</a>
        </div>
    </div>
  )
}

export default SignIn