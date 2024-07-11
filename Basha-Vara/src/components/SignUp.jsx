import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
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
    

    return (
        <div className="register">
       <Navbar/>
            <div className={`${styles.signUp} container`}>
             
                <form className={`${styles.signUp} container`} onSubmit={handleSubmit}>
                  <div className="name">
                   Name  :
                  <input
                  
                        placeholder='Name'
                        name="name"
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                  </div>

                  <div className="email">
                    Email  : 
                  <input
                        placeholder='Email'
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                  </div>
                  
                  <div className="password">
                    Password :
                  <input
                        placeholder='Password'
                        name="password"
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                  </div>
                  <div className="confirmPassword">
                    Confirm Password  :
                  <input
                        placeholder='Confirm Password'
                        name="confirmPassword"
                        type='password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    {!passwordMatch && <p>Password not matched</p>}
                  </div>
                 
                   <div className="contact">
                   Contact  :
                   <input
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
                    <div className="pimage">
                      Upload Image :
                    <input
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
                        />
                    )}
                    </div>
                 
                    <button type="submit" disabled={!passwordMatch}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
