import React from 'react';
import styles from './HomePage.module.css'
import Header from './Header';
import Navbar from './Navbar';
import Categories from './Categories';
import  Slide  from './Slide';

import Listings from './Listings';


const HomePage = () => {
  return (
    <div>
    {/* <Header/>
    
    <Navbar/>
    <Slide />
    <Categories/> */}
   
   <Header/>
   <Navbar/>
   <Slide/>
{/* <Categories/> */}
<Listings/>
 
    

    </div>
    
  );
}

export default HomePage;
