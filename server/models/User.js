// const mongoose = require('mongoose');

// const registerSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
//     contact: String,
//     address: String
// })

// const registerModel = mongoose.model("register", registerSchema);

// module.exports = registerModel;
const mongoose = require("mongoose")
 const UserSchema = new mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true,
        },
        email: {
            type:String,
            required: true,
            unique: true,
        },
        password: {
            type:String,
            required: true,

        },
       
        contact: {
            type:String,
            required:true,
        },
      
        profileImagePath: {
            type: String,
            default:"",
        },
        wishList: {
            type: Array,
            default:[]
        },
        propertyList: {
            type: Array,
            default:[]
        }


    },
    {timestamps:true}
 )

 const User = mongoose.model("User", UserSchema)
 module.exports = User