import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
const ListingCard2 = (
    {
        listingId,
        creator,
        listingPhotoPaths,
        city,
        district,
        thana,
        category,
        type,
        price,
        targetCreator
    }
) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    if (creator !== targetCreator) {
        return null;
      }
  return (
    <div>
         
      
    </div>
  );
}

export default ListingCard2;
