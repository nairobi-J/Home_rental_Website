import React, { useEffect, useState } from 'react';
import { categories } from '../data';
import { Category } from '@mui/icons-material';
import ListingCard from './ListingCard';
import Loader from './Loader';
import {setListings} from "../redux/userSlice"

// import { useDispatch } from 'react-redux';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp,GiIsland, GiWindmill, GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire} from 'react-icons/gi';import { FaSkiing, FaPumpSoap, FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey } 
from 'react-icons/fa';import { FaHouseUser, FaPeopleRoof, FaKitchenSet,FaBangladeshiTakaSign } from 'react-icons/fa6';import { BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge, BiWorld, BiTrash} from 'react-icons/bi';
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from 'react-icons/md';
import { PiBathtubFill, PiCoatHangerFill, PiTelevisionFill } from 'react-icons/pi';
import { TbIroning3 } from 'react-icons/tb';
import { AiFillCar } from 'react-icons/ai';
import {IoIosImages} from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
const iconMap = {
  TbBeach, TbMountain, TbPool, GiBarn, GiBoatFishing, GiCactus, GiCastle,
  GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill, FaSkiing, FaPumpSoap,
  FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey, FaHouseUser, FaPeopleRoof,
  FaKitchenSet, BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge,
  BiWorld, BsSnow, BsFillDoorOpenFill, BsPersonWorkspace, MdOutlineVilla, MdMicrowave,
  MdBalcony, MdYard, MdPets, PiBathtubFill, PiCoatHangerFill, PiTelevisionFill, TbIroning3,
  GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire, AiFillCar, IoDiamond
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
     <div className="category-list">
      {
        categories?.map((item, index) => {
           const IconComp = iconMap[item.icon];
           return(
            <div className="category" key = {index} onClick={()=> setSelectedCategory(item.label)}>
                <div className="category-icon">
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
