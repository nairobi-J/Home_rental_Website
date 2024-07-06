import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import User from './models/User.js';
import authRoutes from './routes/auth.js';
import listingRoutes from './routes/listing.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/listings', listingRoutes);


const PORT = 3000 || 4000;
mongoose.connect(process.env.DBURL, {
    dbName: "dream-home",
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
})
.catch((err) => console.log(`Error: ${err}`));
