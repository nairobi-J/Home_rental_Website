import express from 'express';
import multer from 'multer';
import Listing from '../models/Listing.js';

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

// POST endpoint to create a new listing
router.post('/create', upload.array("listingPhotos"), async (req, res) => {
    try {
        const {
            creator,
            category,
            type,
            streetAddress,
            aptSuite,
            city,
            thana,
            district,
            personCount,
            bedroomCount,
            bathroomCount,
            balconyCount,
            amenity,
            title,
            description,
            highlight,
            highlightDetails,
            price
        } = req.body;

        // Process uploaded photos
        const listingPhotos = req.files;
        if (!listingPhotos || listingPhotos.length === 0) {
            return res.status(400).send("No file uploaded");
        }
        const listingPhotoPaths = listingPhotos.map((file) => file.path);

        // Create new listing object
        const newListing = new Listing({
            creator,
            category,
            type,
            streetAddress,
            aptSuite,
            city,
            thana,
            district,
            personCount,
            bedroomCount,
            bathroomCount,
            balconyCount,
            amenity: amenity.split(','), // Assuming amenity is sent as a comma-separated string
            listingPhotoPaths,
            title,
            description,
            highlight,
            highlightDetails,
            price
        });

        // Save the new listing to the database
        await newListing.save();
        res.status(200).json(newListing);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create listing", error: err.message });
    }
});

// GET endpoint to fetch listings
router.get('/', async (req, res) => {
    const qCategory = req.query.category;
    try {
        let listings;
        if (qCategory) {
            listings = await Listing.find({ category: qCategory }).populate("creator");
        } else {
            listings = await Listing.find().populate("creator");
        }
        res.status(200).json(listings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch listings", error: err.message });
    }
});

export default router;
