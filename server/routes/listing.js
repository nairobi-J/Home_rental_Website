import express from 'express';
import multer from 'multer';
import Listing from '../models/Listing.js';

const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads/"); // Ensure this folder exists
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);  // Add timestamp to avoid name collisions
    }
});

const upload = multer({ storage });

// POST endpoint to create a new listing
router.post('/create', upload.array("listingPhotos"), async (req, res) => {
    try {
        console.log("Request body:", req.body);  // Log entire body to check all data
        console.log("Uploaded files:", req.files);  // Log files to check if multer is receiving them

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

        // Validate if all necessary fields are provided
        if (!category || !type || !streetAddress || !aptSuite || !city || !thana || !district ||
            !personCount || !bedroomCount || !bathroomCount || !balconyCount || !title || !description ||
            !highlight || !highlightDetails || !price) {
            console.log("Missing required fields in request body");
            return res.status(400).send("Missing required fields");
        }

        // Process uploaded photos
        const listingPhotos = req.files;
        if (!listingPhotos || listingPhotos.length === 0) {
            console.log("No photos uploaded");
            return res.status(400).send("No file uploaded");
        }

        const listingPhotoPaths = listingPhotos.map((file) => file.path);
        console.log("Listing photo paths:", listingPhotoPaths);  // Log the uploaded file paths

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
            amenity: amenity ? amenity.split(',') : [],  // Ensure amenity is an array
            listingPhotoPaths,
            title,
            description,
            highlight,
            highlightDetails,
            price
        });

        // Save the new listing to the database
        const savedListing = await newListing.save();
        console.log("Listing saved successfully:", savedListing);  // Log saved listing data
        res.status(200).json(savedListing);
    } catch (err) {
        console.error("Error creating listing:", err);
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

// GET endpoint to fetch a specific listing by ID
router.get('/:listingId', async(req, res) => {
    try{
        const { listingId } = req.params;
        const listing = await Listing.findById(listingId).populate('creator');
        if (!listing) {
            return res.status(404).json({ message: "Listing not found" });
        }
        res.status(202).json(listing);
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch listing", error: err.message });
    }
});

export default router;
