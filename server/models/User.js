import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    profileImagePath: {
        type: String,
        default: "",
    },
    wishList: {
        type: Array,
        default: []
    },
    propertyList: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const User = model("User", UserSchema);
export default User;
