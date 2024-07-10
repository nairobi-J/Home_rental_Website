import express from 'express';
import Review from '../models/Review.js';
import Listing from '../models/Listing.js';
import User from '../models/User.js';

const router = express.Router();

// Add a new review
router.post('/', async (req, res) => {
  try {
    const { listingId, userId, rating, comment } = req.body;
    const listing = await Listing.findById(listingId);
    const user = await User.findById(userId);
    if (!listing || !user) {
      return res.status(404).json({ message: 'Listing or User not found!' });
    }

    const newReview = new Review({ listingId, userId, rating, comment });
    await newReview.save();
    res.status(200).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' });
  }
});

// Fetching reviews for a particular listing
router.get('/:listingId', async (req, res) => {
  try {
    const reviews = await Review.find({ listingId: req.params.listingId }).populate('userId', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews!' });
  }
});

export default router;
