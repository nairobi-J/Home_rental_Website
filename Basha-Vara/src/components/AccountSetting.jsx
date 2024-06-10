import React, { useState } from 'react';
import styles from './AccountSetting.module.css';
import Navbar from './Navbar';

const AccountSetting = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <div className={`${styles.accountSetting} container`}>
      <Navbar/>
    <div className="profile-container">
      <h2>Profile Settings</h2>
      <form>
        {/* Profile Image */}
        <div className="form-group">
          <label htmlFor="profileImage">Profile Picture:</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <br/>
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Profile Preview" />
          </div>
        )}
         <br/>

        {/* Other profile fields */}
        <div className="form-group">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Update your first name"
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="update your last name"
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="Contact">Contact No.: </label>
          <input
            type="contact"
            id="contact"
            name="contact"
            placeholder="update your contact number"
          />
        </div>
        <br/>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter old password"
          />
        </div>
        <br/>

        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="new password"
            placeholder="Enter new password"
          />
        </div>

        <br/>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="address"
            id="address"
            name="address"
            placeholder="Update Address"
          />
        </div>
        <br/>
        <button type="button">Update Profile</button>
      </form>
    </div>
    </div>
  );
};

export default AccountSetting;
