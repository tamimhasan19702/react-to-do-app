/** @format */

//dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const users = require('./models/users.model');
const useRouter = require("./routes/user.route");

//using all the necessary middlewires
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.get('/',(req,res) => {
    res.sendFile(__dirname + "/views/index.html")
})
app.use("/users",useRouter)


//using error handleing middlewire
app.use((req,res,next) => {
    res.status(404).json({
        "message": "Invalid Route Path!"
    })
})



//using server error handleing middlewire
app.use((err,req,res,next) => {
    res.status(500).json({
        "message": "This is a server error"
    })
})

module.exports = app;
