



const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors");

const authRoutes = require('./routes/auth.js')
//const registerModel = require('./routes/auth.js');
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use("/auth", authRoutes)
const PORT = 3000
mongoose.connect(process.env.DBURL,{
    dbName :"dream-home",
    useNewUrlParser: true,

    useUnifiedTopology:true
})
.then(()=>{
    app.listen(PORT, ()=> console.log(`server Port : ${PORT}`))
}).catch((err) => console.log(`${err} error`))
