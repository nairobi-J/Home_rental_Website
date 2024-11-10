import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setListings } from '../redux/userSlice'
import { useState } from 'react'
import Loader from './Loader'
import Navbar from './Navbar'
import ListingCard from './ListingCard'

const SearchBar = () => {
    const [loading, setLoading] = useState(true);
    const {search} = useParams();

    const listings = useSelector((state) => state.listings);
    const dispatch = useDispatch();

    const getSearchListings = async () => {
        try{
            const response = await fetch(`http://localhost:5173/listings/search/${search}`, {
                methos: "GET"
            })

            const data = await response.json();
            dispatch(setListings({listings: data}))
            setLoading(false);

        } catch(err) {
            console.log("fetch search list failed!", err.message)
        }
    }

    useEffect(() => {
        getSearchListings()
    }, [search])
        
  return loading? <Loader/> : (
   <>
      <Navbar />
      <h1 className="title-list">Search</h1>
      <div className="list">
        {wishList?.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            province,
            country,
            category,
            type,
            price,
            booking = false,
          }) => (
            <ListingCard
              listingId={_id}
              creator={creator}
              listingPhotoPaths={listingPhotoPaths}
              city={city}
              province={province}
              country={country}
              category={category}
              type={type}
              price={price}
              booking={booking}
            />
          )
        )}
      </div>
      <Footer />
    </>
  )
}

export default SearchBar