import React from 'react';
import Header from './Header';
import {IconButton} from '@mui/material'
import {Search, Menu, Person} from '@mui/icons-material'

const Navbar = () => {
  return (
    <>
    <Header/>
    <div className = 'navbar'>
        
        <img src = "images/Logo.jpg"/>
        <div className="navbar-search">
          <input type= "text" placeholder='Search...'></input>
          <IconButton>
           <Search sx= {{}}/>
          </IconButton>
        </div>
        <div className="navbar-right">
           
        <button className='navbar-right-ac'>
            <Menu/>
            <Person/>
        </button>
        </div>
      
      </div>
    </>
   
  );
}

export default Navbar;
