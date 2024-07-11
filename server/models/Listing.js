
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ListingSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: { 
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    aptSuite: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    thana: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    personCount: {
        type: Number,
        required: true
    },
    bedroomCount: {
        type: Number,
        required: true
    },
    bathroomCount: {
        type: Number,
        required: true
    },
    balconyCount: {
        type: Number,
        required: true
    },
    amenity: {
        type: Array,
        default: []
    },
    listingPhotoPaths: [{ type: String }],
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    highlight: {
        type: String,
        required: true
    },
    highlightDetails: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Listing = mongoose.model('Listing', ListingSchema);

export default Listing;
