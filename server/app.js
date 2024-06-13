const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const registerModel = require('./models/Dream_Home');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Dream-Home-BD", {
    useNewUrlParser: true,
  useUnifiedTopology: true
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