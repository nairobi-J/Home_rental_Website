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

// GET endpoint to fetch listings by category
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

// get listing by search
router.get("/search/:search", async(req, res) => {
    const {search} = req.params 

    try{

        let listings = [] //if you type irrelevant search 
        if(search === 'all')
        {
            listings = await listing.find().populate("creator")
        } else{
            listings = await listing.find({
                $or: [
                    { category: {$regex: search, $options: "i"}},
                    { title: {$regex: search, $options: "i"}},

                ]
            }).populate("creator")
        }

        res.status(200).json(listings)
    }catch (err) {

        res.status(404).json({message: "fail to fetch listings", error: err.message})
        console.log(err);
    }
})

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
// routes/listings.js





// Fetch listings by creator
router.get('/listings', async (req, res) => {
  const { creatorId } = req.query; // Get creatorId from the query string

  if (!creatorId || !mongoose.Types.ObjectId.isValid(creatorId)) {
    return res.status(400).json({ message: 'Invalid or missing creatorId' });
  }

  try {
    const listings = await Listing.find({ creator: creatorId }); // Fetch listings created by this user

    if (listings.length === 0) {
      return res.status(404).json({ message: 'No listings found for this creator' });
    }

    return res.status(200).json(listings); // Send the listings as the response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;

  


