// import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom';
// import styles from './Review.module.css';

// const Review = ({listingId}) => {
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState('');
//     const history = useHistory();

//     const handleRatingChange = (event) => {
//         setRating(parseInt(event.target.value));
//     };

//     const handleCommentChange = (event) => {
//         setComment(event.target.value);
//     };

//     const handleSubmit = async(event) => {
//         event.preventDefault();
//         const response = await fetch('http://localhost:3000/reviews', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body:JSON.stringify({listingId, rating, comment}),

//         });
//         if(response.ok){
//             history.push('/listings/${listingId}');
//         }else {
//             console.error('Failed to add review!');
//         }
//     };

//   return (
//     <div className={styles.Review}>
//         <h2>Add Review</h2>
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Rating:
//                 <select value={rating} onChange={handleRatingChange}>
//                     <option value={1}>1</option>
//                     <option value={2}>2</option>
//                     <option value={3}>3</option>
//                     <option value={4}>4</option>
//                     <option value={5}>5</option>
//                 </select>
//             </label>
//             <label>
//                 Comment:
//                 <textarea
//                   value={comment}
//                   onChange={handleCommentChange}
//                   className={styles.commentInput}
//                 >
//                 </textarea>
//             </label>

//             <button type='submit' className={styles.submitButton}>
//                 Submit Review
//             </button>
//         </form>

//     </div>
//   );
// };

// export default Review;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Review.module.css';

// const Review = ({ listingId }) => {
//   const navigate = useNavigate();
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/reviews/${listingId}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setReviews(data);
//     } catch (err) {
//       console.log('Fetch reviews failed', err.message);
//     }
//   };

//   const handleReviewSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3000/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ listingId, rating, comment }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const newReview = await response.json();
//       setReviews((prevReviews) => [...prevReviews, newReview]);
//       setRating('');
//       setComment('');
//     } catch (err) {
//       console.log('Failed to submit review', err.message);
//     }
//   };

//   return (
//     <div className={styles.reviewSection}>
//       <h2>Reviews</h2>
//       <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
//         <label>
//           Rating:
//           <input
//             type="number"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             min="1"
//             max="5"
//             required
//           />
//         </label>
//         <label>
//           Comment:
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit Review</button>
//       </form>
//       <div className={styles.reviewList}>
//         {reviews.map((review, index) => (
//           <div key={index} className={styles.review}>
//             <h3>Rating: {review.rating}</h3>
//             <p>{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './Review.module.css';

// const Review = ({ listingId }) => {
//   const navigate = useNavigate();
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState('');
//   const [comment, setComment] = useState('');
//   const [userId, setUserId] = useState(''); // Placeholder for the actual userId

//   useEffect(() => {
//     fetchReviews();
//     // Assuming the userId is stored in local storage or some state management
//     const storedUserId = localStorage.getItem('userId');
//     setUserId(storedUserId);
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/reviews/${listingId}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setReviews(data);
//     } catch (err) {
//       console.log('Fetch reviews failed', err.message);
//     }
//   };

//   const handleReviewSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const reviewData = { listingId, userId, rating, comment };
//       console.log('Submitting review:', reviewData);

//       const response = await fetch('http://localhost:3000/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(reviewData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
//       }

//       const newReview = await response.json();
//       setReviews((prevReviews) => [...prevReviews, newReview]);
//       setRating('');
//       setComment('');
//     } catch (err) {
//       console.log('Failed to submit review:', err.message);
//     }
//   };

//   return (
//     <div className={styles.reviewSection}>
//       <h2>Reviews</h2>
//       <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
//         <label>
//           Rating:
//           <input
//             type="number"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             min="1"
//             max="5"
//             required
//           />
//         </label>
//         <label>
//           Comment:
//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             required
//           />
//         </label>
//         <button type="submit">Submit Review</button>
//       </form>
//       <div className={styles.reviewList}>
//         {reviews.map((review, index) => (
//           <div key={index} className={styles.review}>
//             <h3>Rating: {review.rating}</h3>
//             <p>{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Review.module.css';

const Review = ({ listingId }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState(''); // Placeholder for the actual userId

  useEffect(() => {
    fetchReviews();
    // Assuming the userId is stored in local storage or some state management
    const storedUserId = localStorage.getItem('userId');
    console.log('Retrieved userId from localStorage:', storedUserId);
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
    console.log('Submitting review:', { listingId, userId, rating, comment });
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
      setRating('');
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
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </label>
        <label>
          Comment:
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
            <h3>Rating: {review.rating}</h3>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
