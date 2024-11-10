import React, { useEffect, useState } from 'react';
import { categories } from '../data';
import { Category } from '@mui/icons-material';
import ListingCard2 from './ListingCard2';
import Loader from './Loader';
import { setListings } from "../redux/userSlice";

import { useDispatch, useSelector } from 'react-redux';


const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const listings = useSelector((state) => state.listings); // Get listings from Redux
  const user = useSelector((state) => state.user);  // Get logged-in user from Redux
  const loggedInUserId = user ? user._id : null; // Get the logged-in user's ID

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        selectedCategory !== "All" ?
          `http://localhost:3000/listings?category=${selectedCategory}` :
          "http://localhost:3000/listings",
        { method: "GET" }
      );
      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (err) {
      console.log("Fetch listings failed:", err.message);
    }
  };

  useEffect(() => {
    getFeedListings();
  }, [selectedCategory]);

  // Ensure listings is always an array before using filter
  const filteredListings = Array.isArray(listings) ? listings.filter(listing => listing.creator._id === loggedInUserId) : [];

  return (
    <>
    
     <h1><u>My property List</u></h1>
      {loading ? <Loader /> :
        <div className="listings">
          {filteredListings.length > 0 ? (
            filteredListings.map(({ _id, creator, listingPhotoPaths, city, district, thana, category, type, price }) => (
              <ListingCard2
                key={_id}
                listingId={_id}
                creator={creator}
                listingPhotoPaths={listingPhotoPaths}
                city={city}
                district={district}
                thana={thana}
                category={category}
                type={type}
                price={price}
              />
            ))
          ) : (
            <p>No listings from the logged-in user</p>
          )}
        </div>
      }
    </>
  );
}

export default Listings;
