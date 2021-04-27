const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const ConstituencyController = require("./controllers/sign_up");

application.use(bodyparser.urlencoded({
    extended:true
}));
application.use(express.static(__dirname + '/public'));
application.set('views', path.join(__dirname, "/views/"));

application.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "",
    layoutDir : __dirname + "views" 
}));

application.set("view engine", "hbs");

application.use("/", ConstituencyController);

application.listen("3000", ()=>
{
    console.log("Server Started");
})