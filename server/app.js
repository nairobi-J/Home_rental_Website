const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const registerModel = require('./models/Dream_Home');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

// console.log(process.env.DBURL)

// mongoose.connect("mongodb+srv://sadiajessia:sadia@1234@sadiajessia.sjy4gkn.mongodb.net/dream-home-bd");


mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.post('/register', (req, res) => {
    registerModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    registerModel.findOne({email: email})
    .then(user => {
        if(user){
        if(user.password === password){
            res.json("Login Successful!")
        } else{
            res.json("The password is incorrect!")
        }
    }else{
        res.json("No such record existed!")
    }
    })
})

app.listen(3001, () => {
    console.log("server running on port 3001");
});