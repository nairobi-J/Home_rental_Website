// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Loader from './Loader';
// // import Review from './Review';
// // import styles from './ListingDetails.module.css';


// const ListingDetails = () => {
//     const [loading, setLoading] = useState(true);
//     const { listingId } = useParams();
//     const [listing, setListing] = useState(null);
//     const [multiplier, setMultiplier] = useState(1); // State for the input value

//     const getListingDetails = async () => {
//         try {
//             const response = await fetch(`http://localhost:3000/listings/${listingId}`);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             const data = await response.json();
//             console.log(data); // Log the response to ensure it contains 'creator'
//             setListing(data);
//             setLoading(false);
//         } catch (err) {
//             console.log("Fetch listing details failed", err.message);
//         }
//     };

//     useEffect(() => {
//         getListingDetails();
//     }, [listingId]);

//     if (loading) return <Loader />;

//     if (!listing) {
//         return <p>Listing not found.</p>;
//     }

//     const { creator } = listing;
//     console.log(creator); // Log creator info to ensure it exists

//     const handleMultiplierChange = (event) => {
//         const value = parseInt(event.target.value, 10);
//         setMultiplier(isNaN(value) || value < 1 ? 1 : value);
//     };

//     return (
//         <div className="listing-details">
//             <div className="title">
//                 <h1>{listing.title}</h1>
//             </div>
//             <div className="photos">
//                 {listing.listingPhotoPaths?.map((item, index) => (
//                     <img key={index} src={`http://localhost:3000/${item.replace("public", "")}`} alt={`listing photo ${index + 1}`} />
//                 ))}
//             </div>
//             <h2>{listing.type} in {listing.thana}, {listing.district}, {listing.city}</h2>
//             <p>{listing.personCount} Person (preferred). {listing.bedroomCount} Bedroom. {listing.bathroomCount} Bathroom. {listing.balconyCount} Balcony</p>
//             <hr />
//             <div className="creator">
//                 {creator && creator.profileImagePath ? (
//                     <>
//                         <img src={`http://localhost:3000/${creator.profileImagePath.replace("public", "")}`} alt="creator" />
//                         <h3>Created by {creator.name}</h3>
//                     </>
//                 ) : (
//                     <p>Creator information not available.</p>
//                 )}
//             </div>
//             <hr />
//             <h3>Description</h3>
//             <p>{listing.description}</p>
//             <hr />
//             <h3>{listing.highlight}</h3>
//             <p>{listing.highlightDetails}</p>
//             <div className="rent">
//                 <div>
//                     <h2>What this place offers</h2>
//                     <div className="amenities">
//                         {listing.amenity?.map((item, index) => (
//                             <div className="amenity" key={index}>
//                                 <div className="facility-icon">
//                                     {/* Ensure the facilities and icons are mapped correctly */}
//                                 </div>
//                                 <p>{item}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="price-calculation">
//                     <label>
//                         How Many Months you want to give advance? (atleast one month needed):
//                         <input type="number" value={multiplier} onChange={handleMultiplierChange} />
//                     </label>
//                     <p>Price: {listing.price} x {multiplier} = {listing.price * multiplier}</p>
//                 </div>
//                 <button className='button' type="submit">
//                     Rent
//                 </button>
//                 <p>When you click on the rent your apartment will be confirmed</p>
//             </div>
//         </div>
//     );
// };

// export default ListingDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Review from './Review';
import styles from './ListingDetails.module.css';

const ListingDetails = () => {
  const [loading, setLoading] = useState(true);
  const { listingId } = useParams();
  const [listing, setListing] = useState(null);
  const [multiplier, setMultiplier] = useState(1); // State for the input value

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
      console.log('Fetch listing details failed', err.message);
    }
  };

  useEffect(() => {
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

  return (
    <div className={styles.listingDetails}>
      <div className={styles.title}>
        <h1>{listing.title}</h1>
      </div>
      <div className={styles.photos}>
        {listing.listingPhotoPaths?.map((item, index) => (
          <img key={index} src={`http://localhost:3000/${item.replace('public', '')}`} alt={`listing photo ${index + 1}`} />
        ))}
      </div>
      <h2>
        {listing.type} in {listing.thana}, {listing.district}, {listing.city}
      </h2>
      <p>
        {listing.personCount} Person (preferred). {listing.bedroomCount} Bedroom. {listing.bathroomCount} Bathroom. {listing.balconyCount} Balcony
      </p>
      <hr />
      <div className={styles.creator}>
        {creator && creator.profileImagePath ? (
          <>
            <img src={`http://localhost:3000/${creator.profileImagePath.replace('public', '')}`} alt='creator' />
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
      <div className={styles.rent}>
        <div>
          <h2>What this place offers</h2>
          <div className={styles.amenities}>
            {listing.amenity?.map((item, index) => (
              <div className={styles.amenity} key={index}>
                <div className={styles.facilityIcon}>
                  {/* Ensure the facilities and icons are mapped correctly */}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <Review listingId={listingId} />
        <div className='price-calculation'>
          <label>
            How Many Months you want to give advance? (at least one month needed):
            <input type='number' value={multiplier} onChange={handleMultiplierChange} />
          </label>
          <p>
            Price: {listing.price} x {multiplier} = {listing.price * multiplier}
          </p>
        </div>
        <button className='button' type='submit'>
          Rent
        </button>
        <p>When you click on the rent your apartment will be confirmed</p>
      </div>
    </div>
  );
};

export default ListingDetails;
