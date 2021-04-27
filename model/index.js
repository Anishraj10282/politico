const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/minor", {useNewUrlParser:true, useUnifiedTopology: true }, (err)=>
{
    if(!err)
    {
        console.log("Successfully Connected");
    }
    else
    {
        console.log("Error connecting to database.");
    }
} );

const Constituency = require("./signup.model");