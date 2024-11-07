import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './SignUp.module.css';
const SignUp = () => {
  
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        contact: "",
        address: "",
        profileImage: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: name === "profileImage" ? files[0] : value
        });
    }

    const [passwordMatch, setPasswordMatch] = useState(true);
    useEffect(() => {
        setPasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "");
    }, [formData.password, formData.confirmPassword]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const registerForm = new FormData();
            for (const key in formData) {
                registerForm.append(key, formData[key]);
            }
    
            const response = await fetch("http://localhost:3000/auth/register", {
              method: "POST",
              body: registerForm
          });
          
    
            if (response.ok) {
                navigate('/signIn');
            } else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
            }
        } catch (err) {
            console.log("Registration failed:", err.message);
        }
    }
    const handleClick = (e)=>{
        navigate('/signIn')
    }

    return (
        <div className={styles.register}>
       
            <div className={styles.signUpContainer}>
             
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                  <label className={styles.label}>Name: </label>
                  <input
                        className={styles.input}
                  
                        placeholder='Name'
                        name="name"
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                  </div>

                  <div className={styles.formGroup}>
                  <label className={styles.label}>Email: </label>
                  <input
                        className={styles.input}
                        placeholder='Email'
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                  <label className={styles.label}>Password: </label>
                  <input
                        className={styles.input}
                        placeholder='Password'
                        name="password"
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                  </div>
                  <div className={styles.formGroup}>
                  <label className={styles.label}>Confirm Password:</label>
                  <input
                         className={styles.input}
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        type='password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {!passwordMatch && <p>Password not matched</p>}
                  </div>
                 
                   <div className={styles.formGroup}>
                   <label className={styles.label}>Contact:</label>
                   <input
                         className={styles.input}
                        placeholder='Contact'
                        name="contact"
                        type='text'
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                   </div>
{/*                  
                    <input
                        placeholder='Address'
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    /> */}
                    <div className={styles.formGroup}>
                    <label className={styles.label}>Upload Image:</label>
                    <input
                         className={styles.input}
                        type='file'
                        name='profileImage'
                        accept='image/*'
                        onChange={handleChange}
                        required
                    />
                    {formData.profileImage && (
                        <img
                            src={URL.createObjectURL(formData.profileImage)}
                            alt="Profile"
                            style={{ maxWidth: "80px" }}
                            className={styles.previewImage}
                        />
                    )}
                    </div>
                 
                    <button type="submit" className={styles.button} disabled={!passwordMatch}>Register</button>
                </form>

                <div className={styles.footer}>
                <p>Already Registred? <t/>
                    <button onClick={handleClick } className={styles.linkButton}>Sign In</button>
                </p>
                <button onClick={() => navigate('/')} className={styles.button}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
