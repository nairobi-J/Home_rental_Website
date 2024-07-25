import express from 'express';
import multer from 'multer';
import Rent from '../models/Rent.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

router.post('/upload', upload.array("nationalIdPhoto"), async (req, res) => {
    try {
        const nationalIdPhoto = req.files;
        if (!nationalIdPhoto || nationalIdPhoto.length === 0) {
            return res.status(400).send("No file uploaded");
        }
        const nationalIdPhotoPaths = nationalIdPhoto.map((file) => file.path);
        res.status(200).json({ paths: nationalIdPhotoPaths });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "File upload failed", error: err.message });
    }
});

router.post('/create', async (req, res) => {
    try {
        const {
            customerId,
            hostId,
            listingId,
            advanceMonths,
            totalPrice,
            nationalIdPhotoPaths
        } = req.body;

        const newRent = new Rent({
            customerId,
            hostId,
            listingId,
            advanceMonths,
            nationalIdPhotoPaths,
            totalPrice
        });
        await newRent.save();
        res.status(200).json(newRent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create Rent", error: err.message });
    }
});

export default router;
