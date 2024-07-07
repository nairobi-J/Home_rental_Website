// import {React, useState} from 'react';
// import styles from './SignUp.module.css'
// import axios from 'axios';
// import Header from './Header';
// import Navbar from './Navbar';
// import { useNavigate, Link } from 'react-router-dom';

// const SignUp = () => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [contact, setContact] = useState('');
//   const [address, setAddress] = useState('');
//   const [profileImage, setProfileImage] = useState(null)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3000/register', {name, email, password, contact, address})
//     .then(result => console.log(result))
//     .catch(err=> console.log(err))
//     handleNavigation('/homePage')

//   }
//   // 


//   const navigate = useNavigate(); // Initialize the navigate function

//   // Function to handle navigation
//   const handleNavigation = (route) => {
//     navigate(route);
//   };


//   return (
//     <>
//     <Header/>
//     <div className={`${styles.signUp} container`}>
//     <Navbar/>
//       <h2>Create A New Account!</h2>
//       <form onSubmit={handleSubmit} method='POST'>
//       <div className="info">

//         <label htmlFor='name'>
          
//         </label>
//       <p><b>Name:  </b><input
//                   type="text"
//                   autoComplete='off'
//                   placeholder='Enter Name'
//                   name='name'
//                   className='form-control rounded-0'
//                   onChange={(e) => setName(e.target.value)}
//                   />    
//       </p>
//       </div>
//       <div className="info">
//       <label htmlFor='email'>
        
//         </label>
//       <p>Email:  <input
//                    type="mail"
        
//                   autoComplete='off'
//                   name='email'
//                    placeholder='Enter Email'
//                    onChange={(e) => setEmail(e.target.value)}
//                    />
//       </p>
//       </div>

//       <div className="info">
//       <label htmlFor='password'>
          
//         </label>
//       <p>Password:  <input type="password"
//                            autoComplete='off'
//                            name='password'
//                            placeholder='Enter a Strong Password'
//                            onChange={(e) => setPassword(e.target.value)}
//                            />
//       </p>
//       </div>

//       <div className="info">
//       <label htmlFor='contact'>
        
//         </label>
//       <p>Contact-No:  <input type="tel"
//                              placeholder='Enter Contact No.'
//                              name='contact'
//                              onChange={(e) => setContact(e.target.value)}
//                              />
//       </p>
//       </div>

//       <div className="info">
//       <label htmlFor='address'>
         
//         </label>

//       <p>Address:  <input type="text" 
//                           placeholder='Enter Address'
//                           name='address'
//                           onChange={(e) => setAddress(e.target.value)}
//                           />
//       </p>
      
//       </div>
//       <div className="info">
//       <label htmlFor='image'>
         
//         </label>

//       <p>Image:  <input type="file" 
                         
//                           name='image/*' 
//                           required

//                           />
//       </p>
      
//       </div>
//       <button type='submit'>Sign Up</button>
//       </form>
//     </div>

//     </>
   
//   );
// }

// export default SignUp;
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
