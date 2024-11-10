import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; 
import styles from './Review.module.css';

const Review = ({ listingId }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); 
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetchReviews();
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:3000/reviews/${listingId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      console.log('Fetch reviews failed', err.message);
    }
  };

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ listingId, userId, rating, comment }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
      }

      const newReview = await response.json();
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setRating(0);
      setComment('');
    } catch (err) {
      console.log('Failed to submit review', err.message);
    }
  };

  return (
    <div className={styles.reviewSection}>
      <h2>Reviews</h2>
      <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
        <label>
          Rating:
          <div className={styles.starRating}>
            {[...Array(5)].map((_, index) => {
              const starRating = index + 1;
              return (
                <FaStar
                  key={index}
                  size={24}
                  color={starRating <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"}
                  onClick={() => setRating(starRating)}
                  onMouseEnter={() => setHoverRating(starRating)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{ cursor: 'pointer', marginRight: '5px' }}
                />
              );
            })}
          </div>
        </label>
        <label>
          Comment:
          <div></div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
      <div className={styles.reviewList}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.review}>
            {review.userId && <h3>{review.userId.name}: </h3>}
            <h4>Rating: {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}</h4> 
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
