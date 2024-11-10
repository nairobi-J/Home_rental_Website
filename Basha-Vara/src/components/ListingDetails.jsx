import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Review from './Review';
import FileUpload from './FileUpload';
import styles from './ListingDetails.module.css';
import Navbar from './Navbar';
import { Balcony, Bathroom, Bed, Person } from '@mui/icons-material';
import { categories, types, facilities } from '../data';
import {DragDropContext, Draggable,Droppable} from 'react-beautiful-dnd'
import { RemoveCircleOutline, AddCircleOutline} from '@mui/icons-material';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp,
  GiIsland, GiWindmill, GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire,
  GiHanger
} from 'react-icons/gi';
import { FaSkiing, FaPumpSoap, FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey, FaHospital, FaSchool, FaLeaf, FaRoad, FaCity, FaChild, FaMosque, FaTree } from 'react-icons/fa';
import { FaHouseUser, FaPeopleRoof, FaKitchenSet,FaBangladeshiTakaSign, FaShop } from 'react-icons/fa6';
import { BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge, BiWorld, BiTrash} from 'react-icons/bi';
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from 'react-icons/md';
import { PiBathtubFill, PiCoatHangerFill, PiTelevisionFill } from 'react-icons/pi';
import { TbIroning3 } from 'react-icons/tb';
import { AiFillCar } from 'react-icons/ai';
import {IoIosImages} from 'react-icons/io';
const iconMap = {
    TbBeach, TbMountain, TbPool, GiBarn, GiBoatFishing, GiCactus, GiCastle,
    GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill, FaSkiing, FaPumpSoap,
    FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey, FaHouseUser, FaPeopleRoof,
    FaKitchenSet, BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge,
    BiWorld, BsSnow, BsFillDoorOpenFill, BsPersonWorkspace, MdOutlineVilla, MdMicrowave,
    MdBalcony, MdYard, MdPets, PiBathtubFill, PiCoatHangerFill, PiTelevisionFill, TbIroning3,
    GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire, AiFillCar, IoDiamond,FaHospital,FaSchool,FaLeaf,FaRoad,FaCity,FaShop,FaChild,FaMosque, FaTree,GiHanger
  };
const ListingDetails = () => {
    const [loading, setLoading] = useState(true);
    const [listing, setListing] = useState(null);
    const [multiplier, setMultiplier] = useState(1);
    const [nationalIdPhotoPaths, setNationalIdPhotoPaths] = useState([]);
    const user = useSelector((state) => state.user);
    
    const { listingId } = useParams();
    const navigate = useNavigate();
    const customerId = useSelector((state) => state?.user?._id);

    useEffect(() => {
        const getListingDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/listings/${listingId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setListing(data);
                setLoading(false);
            } catch (err) {
                console.log("Fetch listing details failed", err.message);
            }
        };

        getListingDetails();
    }, [listingId]);

    if (loading) return <Loader />;

    if (!listing) {
        return <p>Listing not found.</p>;
    }

    const { creator } = listing;

    const handleMultiplierChange = (event) => {
        const value = parseInt(event.target.value, 10);
        setMultiplier(isNaN(value) || value < 1 ? 1 : value);
    };

    const handleSubmit = async () => {
        try {
            const rentForm = {
                customerId,
                listingId,
                hostId: listing.creator._id,
                advanceMonths: multiplier,
                nationalIdPhotoPaths,
                totalPrice: listing.price * multiplier,
            };

            const response = await fetch("http://localhost:3000/rent/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(rentForm),
            });

            if (response.ok) {
                 navigate(`/${customerId}`);
            }
        } catch (err) {
            console.log("submit Rent failed", err.message);
        }
    };

    const handleUploadSuccess = (paths) => {
        setNationalIdPhotoPaths(paths);
    };

    return (
   
      <>
        <div className={styles['list']}>
          
          <div>
            <h1><u>Here is the details:</u></h1>
          </div>
       
       <div className={styles['listing-details']}>
           
           <div className={styles['title']}>
               <h2>Title:{listing.title}</h2>
           </div>
           <div className={styles['photos']}>
               <h1>Photos:</h1>
               {listing.listingPhotoPaths?.map((item, index) => (
                   <img key={index} src={`http://localhost:3000/${item.replace("public", "")}`} alt={`listing photo ${index + 1}`} />
               ))}
           </div>
           <h2>{listing.type} in {listing.thana}, {listing.district}, {listing.city}</h2>
           <div className={styles['basic']}>

           <div className={styles['basics']}><Person/> 
           {listing.personCount} </div>
            <div className={styles['basics']}> <Bed/> {listing.bedroomCount}</div>
            <div className={styles['basics']}><Bathroom/>{listing.bathroomCount}</div>
            <div className={styles['basics']}><Balcony/> {listing.balconyCount} </div>
           </div>
           
            <p></p>
           <hr />
           <div className={styles['creator']}>
               {creator && creator.profileImagePath  ? (
                   <>
                       <img src={`http://localhost:3000/${creator.profileImagePath.replace("public", "")}`} alt="creator" />
                       <h3>Created by {creator.name}, Contact:{creator.contact}</h3>
                       
                       
                   </>
               ) : (
                   <p>Creator information not available.</p>
               )}
           </div>
           <hr />
           <h3>Description</h3>
           <p>{listing.description}</p>
           <hr />
           <h3>HighLights</h3>
           <p>{listing.highlight}</p>
           <hr />
           <h3>Details</h3>
           <p>{listing.highlightDetails}</p>
           <hr />
           <div className={styles['rent']}>
               <div>
                   <h2>What this place offers</h2>
                   <div className={styles['amenities']}>
                       {listing.amenity?.map((item, index) => (
                           <div className={styles['amenity']} key={index}>
                               <div className={styles['facility-icon']}>
                                   {/* Ensure the facilities and icons are mapped correctly */}
                               </div>
                               <ol type=''>{item}</ol>
                           </div>
                       ))}
                   </div>
               </div>
               <Review listingId={listingId} />
               <div className={styles['price-calculation']}>
                   <label>
                       How Many Months you want to give advance? (at least one month needed):
                       <input type="number" value={multiplier} onChange={handleMultiplierChange} />
                   </label>
                   <p>Price: {listing.price} x {multiplier} = {listing.price * multiplier}</p>
               </div>
               {/* <h3>add your national id</h3>
               <FileUpload onUploadSuccess={handleUploadSuccess} />
               <button className={styles['button']} type="submit" onClick={handleSubmit}>
                   Rent
               </button> */}
               {/* <p>When you click on the rent your apartment will be confirmed</p> */}
           </div>
           <hr />
          
       </div> 
       </div>
      </>
        
    );
};

export default ListingDetails;
