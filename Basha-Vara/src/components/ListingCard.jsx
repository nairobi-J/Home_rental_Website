import React, { useState } from 'react';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Styles from './ListingCard.module.css';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();
  const handleClick = () => {
    window.location.href = `/listings/${listingId}`;
  };
  const handleClick1 = () => {
    navigate('/signin')
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const isLoggedIn = !!localStorage.getItem('token');

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  return (
    <div className={Styles['listing-card-container']}>
      <div className={Styles['listing-card']}>
        <div className={Styles['image-slider']}>
          <div className={Styles.slider} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {listingPhotoPaths?.map((item, index) => (
              <div className={Styles.slide} key={index}>
                <img src={`http://localhost:3000/${item.replace('public', '')}`} alt={`photo ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className={Styles['prev-button']} onClick={goToPrevSlide}>
            <ArrowBackIosNew sx={{ fontSize: '15px' }} />
          </div>
          <div className={Styles['next-button']} onClick={goToNextSlide}>
            <ArrowForwardIos sx={{ fontSize: '15px' }} />
          </div>
        </div>

        <div className={Styles.card}>
          <h3>
            Address: {thana}, {city}, {district}
          </h3>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>
            <span>
              Rent: <FaBangladeshiTakaSign />
              {price}
            </span>{' '}
            /mo
          </p>
          {isLoggedIn?(
          <button onClick={handleClick}>See details</button>
          ):(<button onClick={handleClick1}>Log In To see details</button>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
