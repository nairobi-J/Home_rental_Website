const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(<h1>Home Page</h1>)
});

app.listen (5001, () => {
    console.log("Server is runnig on port 5001");
});