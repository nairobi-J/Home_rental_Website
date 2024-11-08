import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Review from './Review';
import FileUpload from './FileUpload';
import styles from './ListingDetails.module.css';
import Navbar from './Navbar';

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
            <p>Here is the details:</p>
          </div>
       
       <div className={styles['listing-details']}>
           
           <div className={styles['title']}>
               <h1>Title:{listing.title}</h1>
           </div>
           <div className={styles['photos']}>
               <h1>Photos:</h1>
               {listing.listingPhotoPaths?.map((item, index) => (
                   <img key={index} src={`http://localhost:3000/${item.replace("public", "")}`} alt={`listing photo ${index + 1}`} />
               ))}
           </div>
           <h2>{listing.type} in {listing.thana}, {listing.district}, {listing.city}</h2>
           <p>Person(preferred): {listing.personCount} </p>
            <p> Bedroom: {listing.bedroomCount}</p>
            <p>Bathroom: {listing.bathroomCount}</p>
            <p>Balcony: {listing.balconyCount} </p>
            <p></p>
           <hr />
           <div className={styles['creator']}>
               {creator && creator.profileImagePath ? (
                   <>
                       <img src={`http://localhost:3000/${creator.profileImagePath.replace("public", "")}`} alt="creator" />
                       <h3>Created by {creator.name}</h3>
                   </>
               ) : (
                   <p>Creator information not available.</p>
               )}
           </div>
           <hr />
           <h3>Description</h3>
           <p>{listing.description}</p>
           <hr />
           <h3>{listing.highlight}</h3>
           <p>{listing.highlightDetails}</p>
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
               <h3>add your national id</h3>
               <FileUpload onUploadSuccess={handleUploadSuccess} />
               <button className={styles['button']} type="submit" onClick={handleSubmit}>
                   Rent
               </button>
               <p>When you click on the rent your apartment will be confirmed</p>
           </div>
           <hr />
          
       </div> 
       </div>
      </>
        
    );
};

export default ListingDetails;
