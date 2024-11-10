import React from 'react'
import styles from './PasswordReset.module.css'
import Header from './Header'
import Navbar from './Navbar'

const PasswordReset = () => {
  return (
    <>
    <Header />
    <div className={`${styles.passwordReset} container`}>
   
    
      
     
        <h2>Reset Your Password</h2>
        <div className='passInfo'>
            <p>Email: <input type='Email'></input></p>
            <p> OTP:  <input type='OTP'></input></p>
            <p>New <br/>Password: <input type='Password'></input></p>
            <p>Confirm <br/>Password: <input type='Password'></input></p>
        </div>
        <div>
            <button className='passReset'>Save</button>
        </div>
        <div>
          <button onClick={() => navigate('/')}>Back</button>
        </div>
    </div>
    </>
   
  )
}

export default PasswordReset