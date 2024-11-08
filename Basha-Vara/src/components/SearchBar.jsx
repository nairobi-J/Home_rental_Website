import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [listings, setListings] = useState([]);

  const handleSearch = async () => {
    // Validate price inputs
    if ((minPrice && isNaN(minPrice)) || (maxPrice && isNaN(maxPrice))) {
      alert("Please enter valid numbers for prices.");
      return;
    }

    // Check if minPrice is greater than maxPrice
    if (minPrice && maxPrice && parseFloat(minPrice) > parseFloat(maxPrice)) {
      alert("Minimum price cannot be greater than maximum price.");
      return;
    }

    try {
      // Build the query string dynamically
      const queryParams = new URLSearchParams({
        city,
        district,
        category,
        minPrice: minPrice ? minPrice : undefined, // Only include if it's set
        maxPrice: maxPrice ? maxPrice : undefined,
      });

      const response = await axios.get(`http://localhost:3000/listings/search?${queryParams.toString()}`);

      setListings(response.data); // Update the listings state with the response data
    } catch (error) {
      console.error("Error fetching search results:", error);
      alert("Failed to fetch search results. Please try again later.");
    }
  };

  return (
    <div>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="District" />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Min Price" />
      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Max Price" />
      <button onClick={handleSearch}>Search</button>

      <div>
        {listings.map((listing) => (
          <div key={listing._id}>
            <h3>{listing.title}</h3>
            <p>{listing.city}, {listing.district}</p>
            <p>{listing.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
