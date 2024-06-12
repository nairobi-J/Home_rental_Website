const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contact: String,
    address: String
})

const registerModel = mongoose.model("register", registerSchema);

module.exports = registerModel;