import React, { useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Styles from './ListingCard.module.css';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const ListingCard = ({
  listingId,
  creator,
  listingPhotoPaths,
  city,
  district,
  thana,
  category,
  type,
  price
}) => {
  const handleClick = () => {
    // Change this to your target URL
    window.location.href = `http://localhost:3000/listings/${listingId}`;
};

  console.log(listingId)
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  return (
    <div className={`${Styles['listing-card']} container`}  >
      <div className={`${Styles['image-slider']} container`}>
        <div className={`${Styles.slider} container`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {listingPhotoPaths?.map((item, index) => (
            <div className={`${Styles.slide} container`} key={index}>
              <img
                src={`http://localhost:3000/${item.replace("public", "")}`}
                alt={`photo ${index + 1}`}
              />
              <div className={`${Styles['prev-button']} container`} onClick={goToPrevSlide}>
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div className={`${Styles['next-button']} container`} onClick={goToNextSlide}>
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3>{thana},{city}, {district}</h3>
      <p>{category}</p>
      <p>{type}</p>
      <p>
        <span>
          <FaBangladeshiTakaSign />{price}
        </span>
        Per Month
      </p>
      <button onClick = {handleClick}>See details</button>
    </div>
  );
}

export default ListingCard;
