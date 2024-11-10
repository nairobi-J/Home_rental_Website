


import React, { useState } from 'react';
import Header from './Header';
import { IconButton } from '@mui/material';
import { Search, Menu, Person } from '@mui/icons-material';
import styles from './Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLogOut } from '../redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">
            <img src="images/Logo.jpg" alt="Logo" />
          </a>
         
        </div>
        <div className={styles.searchContainer}>
         <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
           />
           <IconButton disable = {search === ""}>
            <Search
            onClick = {() => {
              navigate(`/listings/search/${search}`)
            }}
            />
           </IconButton>
        </div>
     
        <div className="beHost">
        {user ? (
            <a href="/createList" className={styles.hostLink}>Be the Host</a>
          ) : (
            <a href="/signin" className={styles.hostLink}>Become a host</a>
          )}
        </div>
       
        <div className={styles.navbarRight}>
         
          <button className={styles.accountButton} onClick={() => setDropdownMenu(!dropdownMenu)}>
            <Menu />
            {!user ? (
              <Person />
            ) : (
              <img
                src={`http://localhost:3000/${user.profileImagePath.replace("public", "")}`}
                alt="Profile"
                className={styles.profileImage}
              />
            )}
          </button>
          {dropdownMenu && (
            <div className={styles.dropdownMenu}>
              {user ? (
                <>
                  {/* <Link to="/wishList">Wish List</Link> */}
                  <Link to="/propertyList">Property List</Link>
                  <Link to="/about">About Us</Link>
                 {/* <Link to = "/createList">create</Link> */}
                  <Link to="/signIn" onClick={() => dispatch(setLogOut())}>Log Out</Link>
                </>
              ) : (
                <>
                  <Link to="/signIn">Sign In</Link>
                  <Link to="/signUp">Sign Up</Link>
                </>
              )}
            </div>
          )}
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
