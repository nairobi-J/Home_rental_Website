import mongoose from 'mongoose';
const { Schema } = mongoose;


const RentSchema = new Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    hostId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    listingId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Listing"
    },

    advanceMonths:{
        type:Number,
        require:true
    },
    nationalIdpath: {
        type: String,
        default: "",
    },
    totalPrice:{
        type:Number,
        require:true
    }

},
{timestamps: true}

);

const Rent = mongoose.model("Rent", RentSchema)
export default Rent;