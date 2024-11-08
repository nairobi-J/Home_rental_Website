import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import User from '../models/User.js'; // Ensure the correct path

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/register', upload.single('profileImage'), async (req, res) => {
  try {
    const { name, email, password, contact } = req.body;
    const profileImage = req.file;

    if (!profileImage) {
      return res.status(400).send('No file uploaded');
    }

    const profileImagePath = profileImage.path;

    const existingUser = await User.findOne({ email });
    const sameName = await User.findOne({ name });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }
    if (sameName) {
  return res.status(409).json({ message: 'Name already taken' });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      contact,
      profileImagePath,
    });

    await newUser.save();

    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({ message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_secret);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});
router.post('/check-availability', async (req, res) => {
  try {
    const { email, name, contact } = req.body;

    const emailExists = await User.findOne({ email });
    const nameExists = await User.findOne({ name });
    const phnExists = await User.findOne({ contact });

    if (emailExists) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    if (nameExists) {
      return res.status(409).json({ message: 'Name already taken' });
    }

    if (phnExists) {
      return res.status(409).json({ message: 'Contact already registered' });
    }

    res.status(200).json({ message: 'Available' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking availability', error: err.message });
  }
});


export default router;
