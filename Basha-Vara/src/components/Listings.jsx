import React, { useEffect, useState } from 'react';
import { categories } from '../data';
import { Category } from '@mui/icons-material';
import ListingCard from './ListingCard';
import Loader from './Loader';
import {setListings} from "../redux/userSlice"
import styles from './Listings.module.css';
// import { useDispatch } from 'react-redux';
import {  TbMountain } from 'react-icons/tb';
import { GiForestCamp,GiCampfire} from 'react-icons/gi';import {  FaSchool, FaHospital, FaRoad, FaCity, FaShop, FaChild, FaMosque, FaTree, FaPeace, FaLeaf } from 'react-icons/fa6';
import {  BiWorld} from 'react-icons/bi';

import { IoDiamond } from 'react-icons/io5';

import { useDispatch, useSelector } from 'react-redux';
const iconMap = {
 TbMountain, 
  GiForestCamp, 
  BiWorld,
 
 GiCampfire,  IoDiamond, FaSchool, FaHospital, FaRoad, FaCity, FaShop, FaChild, FaMosque, FaTree, FaLeaf
};
const Listings = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("")
    const listings = useSelector( (state) => state.listings)
      const getFeedListings = async () => {
          try{
          
                const response = await fetch(
                     selectedCategory !== "All"?
                  `http://localhost:3000/listings?category=${selectedCategory}`:
                  "http://localhost:3000/listings",
                 { method:"GET"}
                );
                const data = await response.json()
                dispatch(setListings({listings: data}))
                setLoading(false)

          }
          catch(err){
                console.log("fetch listing failes", err.message)
          }
      }

      useEffect(()=> {
          getFeedListings()
      }, [selectedCategory])

      console.log(listings)
  return (
    <>
     <div className={styles['listings']}>
      {
        
        categories?.map((item, index) => {
           const IconComp = iconMap[item.icon];
           return(
            <div className={styles['category']} key = {index} onClick={()=> setSelectedCategory(item.label)}>
                <div className={styles['category-icon']}>
                    {IconComp && <IconComp/>}
                </div>
                <p>{item.label}</p>

            </div>
           )
        })
      }
     </div>
    {loading? <Loader/>: 
    
     <div className="listings">
       
      
        {listings.map((
         { _id, 
          creator,
          listingPhotoPaths,
          city,district, 
          thana, 
          category, 
          type, 
          price}) => (<ListingCard
          listingId = {_id}
          creator = {creator}
          listingPhotoPaths = {listingPhotoPaths}
          city = {city}
          district = {district}
          thana = {thana}
          category = {category}
          type = {type}
          price = {price}
          />))}
          
     </div>
    
    }
    </>
  );
}

export default Listings;
