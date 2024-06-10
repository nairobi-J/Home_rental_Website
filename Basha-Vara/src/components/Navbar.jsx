import React from 'react';
import Header from './Header';
import {IconButton} from '@mui/material'
import {Search, Menu, Person} from '@mui/icons-material'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
    <Header/>
<div className = {`${styles.navbar} container`}>
    <div className="logo">
    <img src = "images/Logo.jpg"/>
    </div>

       
        <div className="navbar-search">
      
          <input type= "text" placeholder='Search...'></input>
          <IconButton>
           <Search sx= {{}}/>
          </IconButton>
        </div>
        
           <nav >
        
        <div >
            <ul className = {styles.navi}>
               
                <li><a href = "/about">About</a></li>
                <li><a href = "/host">Become a Host</a></li>
                <li><a href = "/wishList">WishList</a></li>
                <li><a href = "/accountSetting" >Settings</a></li>
     
                
            </ul>
        </div>
    </nav>
       
       
      
      </div>
    </>
   
  );
}

export default Navbar;
