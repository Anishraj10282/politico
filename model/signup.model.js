const mongoose = require("mongoose");

var ConstituencySchema = new mongoose.Schema({
    name : 
    {
        type:String,
        required:"Required"
    },
});


var VoterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:"Required"
    },
    email:{
        type:String,
        required:"Required"
    },
    password:
    {
        type:String,
        required:"Required"
    },
    constituency:{
        type:String,
        required:"Required"
    }
});


mongoose.model("constituencies", ConstituencySchema);
mongoose.model("voters", VoterSchema);
