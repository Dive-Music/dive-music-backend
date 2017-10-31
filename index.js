const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 7800;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const reviewRoute = require("./routes/reviews-routes.js");
const path = require("path");
const config = require("./config.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use("/scubasound", reviewRoute)

app.use(express.static(path.resolve(__dirname, "client", "build")))
app.get("/", (req, res) =>{
    res.sendfile(path.resolve(__dirname, "client", "build", "index"))
})

mongoose.connect(config.database, (err) =>{
    if (err) throw err
    console.log("connected to MongoDb");
    app.listen(config.PORT, ()=>{
        console.log("RUNNING ON PORT" + PORT)
    })
})


