import React from 'react';
import Header from './Header';
import {IconButton} from '@mui/material'
import {Search, Menu, Person} from '@mui/icons-material'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <Header/>
<div className = {styles.navbar }>
  <a href = "/"><img src = "images/Logo.jpg"/></a>
    
 <div className="navbar-search">
      <input type= "text" placeholder='Search...'/>
          <IconButton>
           <Search sx= {{}}/>
          </IconButton>
        </div>
        
           
        
        {/* <div>
          {user ? <a  href="/cretae-list">Become A host</a> : 
          <a href = "/signIn">become a host</a>}

            <li><a href = "/homePage">Home</a></li>
                <li><a href = "/about">About</a></li>
                <li><a href = "/host">Become a Host</a></li>
                <li><a href = "/wish">WishList</a></li>
                <li><a href = "/accountSetting" >Settings</a></li>
          
        </div> */}

       
     
      </div>
    </>
   
  );
}

export default Navbar;
