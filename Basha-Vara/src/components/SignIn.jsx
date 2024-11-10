import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './SignIn.module.css';
import { setLogin } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const error = await response.json();
        console.log('Error:', response.status, error.message);
        if (response.status === 409) {
          console.log("User doesn't exist");
        } else if (response.status === 400) {
          console.log('Wrong password');
        } else {
          console.log('An unknown error occurred');
        }
        return;
      }
  
      const loggedIn = await response.json();
      
      localStorage.setItem('userId', loggedIn.user._id);

      dispatch(setLogin({
        user: loggedIn.user,
        token: loggedIn.token,
      }));
      navigate('/');
    } catch (err) {
      console.log('Login failed', err.message);
    }
  };
  const handleClick = () => {
    navigate('/signUp');
  }

  return (
    <>
     
      <div className={styles.login}>
      
        <div className={styles.signInContainer}>
       
          <div className={styles.formContainer}>
            
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} >
            <div className={styles.formGroup}>
          
              <label className={styles.label}>Email: </label>
              <input
                className={styles.input}
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
             <div className={styles.formGroup}>
              <label className={styles.label}>Password: </label>
              <input
                className={styles.input}
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.reg}>
            <button type='submit' className={styles.button}>Sign in</button>
            </div>
             
          </form>
          </div>
          <div>
            <p>
              Forget Password? <Link to="/passwordReset">Reset it here</Link>.
            </p>
          </div>
          <div className={styles.reg}>
          <p>Not registered?

</p> <button onClick = {handleClick} className={styles.linkButton}>Register</button>

          </div>
          <div className={styles.reg}><button onClick={() => navigate('/')} className={styles.button}>Back</button></div>
          


        </div>
      </div>
    </>
  );
};

export default SignIn;
