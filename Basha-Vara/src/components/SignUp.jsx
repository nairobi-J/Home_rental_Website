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
    profileImage: null,
  });

  const [validationErrors, setValidationErrors] = useState({
    nameError: "",
    emailError: "",
    contactError:"",
    passwordMatch: true,
  });

  const [isChecking, setIsChecking] = useState({
    name: false,
    email: false,
    contact:false
  });

  const navigate = useNavigate();

  // Real-time validation check for name and email
  const checkAvailability = async (field, value) => {
    setIsChecking((prevState) => ({ ...prevState, [field]: true }));

    try {
      const response = await fetch("http://localhost:3000/auth/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [field]: value }),
      });

      const data = await response.json();

      if (response.ok) {
        setValidationErrors((prevState) => ({
          ...prevState,
          [`${field}Error`]: "",
        }));
      } else {
        setValidationErrors((prevState) => ({
          ...prevState,
          [`${field}Error`]: data.message,
        }));
      }
    } catch (err) {
      console.error("Error checking availability:", err.message);
    } finally {
      setIsChecking((prevState) => ({ ...prevState, [field]: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Update form data
    setFormData({
      ...formData,
      [name]: name === "profileImage" ? files[0] : value,
    });

    // Trigger real-time check for name or email
    if (name === "name" || name === "email" || name === "contact") {
      checkAvailability(name, value);
    }
  };

  useEffect(() => {
    setValidationErrors((prevState) => ({
      ...prevState,
      passwordMatch: formData.password === formData.confirmPassword || formData.confirmPassword === "",
    }));
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerForm = new FormData();
      for (const key in formData) {
        registerForm.append(key, formData[key]);
      }

      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        body: registerForm,
      });

      if (response.ok) {
        navigate('/signIn');
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData.message);
        alert(`Error: ${errorData.message}`);
      }
    } catch (err) {
      console.log("Registration failed:", err.message);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.signUpContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name: </label>
            <input
              className={styles.input}
              placeholder="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {validationErrors.nameError && (
              <p style={{ color: "red", fontSize:"10px" }}>{validationErrors.nameError}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email: </label>
            <input
              className={styles.input}
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {validationErrors.emailError && (
              <p style={{ color: "red" ,fontSize:"10px"}}>{validationErrors.emailError}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password: </label>
            <input
              className={styles.input}
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm Password:</label>
            <input
              className={styles.input}
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {!validationErrors.passwordMatch && <p>Password not matched</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Contact:</label>
            <input
              className={styles.input}
              placeholder="Contact"
              name="contact"
              type="text"
              value={formData.contact}
              onChange={handleChange}
              required
            />
                 {validationErrors.contactError && (
              <p style={{ color: "red",  fontSize:"10px"}}>{validationErrors.contactError}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Upload Image:</label>
            <input
              className={styles.input}
              type="file"
              name="profileImage"
              accept="image/*"
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

          <button type="submit" className={styles.button} disabled={!validationErrors.passwordMatch || validationErrors.nameError || validationErrors.emailError}>Register</button>
        </form>

        <div className={styles.footer}>
          <p>Already Registered? 
            <button onClick={() => navigate('/signIn')} className={styles.linkButton}>Sign In</button>
          </p>
          <button onClick={() => navigate('/')} className={styles.button}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
