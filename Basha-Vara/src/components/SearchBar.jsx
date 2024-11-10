import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setListings } from '../redux/userSlice';
import Loader from './Loader';
import Navbar from './Navbar';
import ListingCard from './ListingCard';
// import Footer from './Footer';  // Ensure Footer is imported

const SearchBar = () => {
    const [loading, setLoading] = useState(true);
    const { search } = useParams();

    const listings = useSelector((state) => state.listings);
    const listingsArray = Array.isArray(listings) ? listings : [];
    const dispatch = useDispatch();

    const getSearchListings = async () => {
        try {
            const response = await fetch(`http://localhost:3000/listings/search/${search}`, {
                method: "GET"
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            dispatch(setListings(data));  // Corrected to dispatch with listings directly
            setLoading(false);
        } catch (err) {
            console.log("Fetch search listings failed:", err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getSearchListings();
    }, [search]);

    return loading ? (
        <Loader />
    ) : (
        <>
            <Navbar />
            <h1 className="title-list">Search Results</h1>
            <div className="list">
                {listingsArray.length > 0 ? (
                    listingsArray.map((listing) => (
                        <ListingCard
                            key={listing._id}  // Add a unique key for each item
                            listingId={listing._id}
                            creator={listing.creator}
                            listingPhotoPaths={listing.listingPhotoPaths}
                            city={listing.city}
                            district={listing.district}
                            thana={listing.thana}
                            category={listing.category}
                            type={listing.type}
                            price={listing.price}
                        />
                    ))
                ) : (
                    <p>No listings found for "{search}"</p>
                )}
            </div>
           
        </>
    );
};

export default SearchBar;
