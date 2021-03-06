const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const HttpError = require('./models/http-error');



//importing custom routes
const userRoutes=require("./routes/user-routes");
const movieRoutes=require("./routes/movie-routes")
//importing firebase admin
const fbAdmin=require("./admin");


require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,x-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
    req.fbAdmin=fbAdmin
    next();
});

//All the custom routes will be listed here

app.use("/api/users",userRoutes);
app.use("/api/",movieRoutes);


//

//Error Module
app.use((req,res,next)=>{
    const error=new HttpError('Could not find this route.',404);
    throw error;
  })

//
app.use((error, req, res, next) => {
    // if(req.file){
    //   fs.unlink(req.file.path,(err)=>{
    //     console.log(err);
    //     return next(error);

    //   });

    // }
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error happened" });
});


mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.czgvp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(process.env.PORT || 3002);
  })
  .catch(err => {
    console.log(err);
  });

