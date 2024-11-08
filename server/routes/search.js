import express from 'express';
import Listing from '../models/Listing.js'; // Adjust the path as necessary

const router = express.Router();

// Search listings based on query parameters
router.get('/search', async (req, res) => {
  try {
    const { city, district, category, minPrice, maxPrice } = req.query;
    let filter = {};

    if (city) filter.city = city;
    if (district) filter.district = district;
    if (category) filter.category = category;
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = minPrice;
      if (maxPrice) filter.price.$lte = maxPrice;
    }

    const listings = await Listing.find(filter);
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json({ message: 'Error occurred while searching', error: err.message });
  }
});

export default router;
