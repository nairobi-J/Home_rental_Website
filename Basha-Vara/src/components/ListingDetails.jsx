import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { facilities } from '../data';
import Loader from './Loader';

const ListingDetails = () => {
    const [loading, setLoading] = useState(true);
    const { listingId } = useParams();
    const [listing, setListing] = useState(null);

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

    useEffect(() => {
        getListingDetails();
    }, [listingId]);

    if (loading) return <Loader />;

    if (!listing) {
        return <p>Listing not found.</p>;
    }

    return (
        <div className="listing-details">
            <div className="title">
                <h1>{listing.title}</h1>
                <div></div>
            </div>
            <div className="photos">
                {listing.listingPhotoPaths?.map((item, index) => (
                    <img key={index} src={`http://localhost:3000/${item.replace("public", "")}`} alt={`listing photo ${index + 1}`} />
                ))}
            </div>
            <h2>{listing.type} in {listing.thana}, {listing.district}, {listing.city}</h2>
            <p>{listing.personCount} Person (preferred). {listing.bedroomCount} Bedroom. {listing.bathroomCount} Bathroom. {listing.balconyCount} Balcony</p>
            <hr />
            <div className="creator">
                {listing.creator && listing.creator.profileImagePath ? (
                    <>
                        <img src={`http://localhost:3000/${listing.creator.profileImagePath.replace("public", "")}`} alt="creator" />
                        <h3>Created by {listing.creator.name}</h3>
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
            <div className="rent">
                <div>
                    <h2>What this place offers</h2>
                    <div className="amenities">
                        {listing.amenity?.map((item, index) => (
                            <div className="amenity" key={index}>
                                <div className="facility-icon">
                                    {facilities.find(facility => facility.name === item)?.icon}
                                </div>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='button' type="submit">
                    Rent
                </button>
                <p>When you click on the rent your apartment will be confirmed</p>
            </div>
        </div>
    );
};

export default ListingDetails;
