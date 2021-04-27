const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const ConstituencyModel = mongoose.model("constituencies");
const VoterModel = mongoose.model("voters");

router.get("/signup.hbs", (req, res)=>
{
    ConstituencyModel.find((err, docs)=>
    {
        var area = [];
        docs.forEach((doc, index)=>
        {
            area.push(doc.name);
        });
        if(!err)
        {
            res.render("signup", {data:area});
        }
    });
});
router.post("/signup.hbs/add", (req, res)=>
{
    var voter = new VoterModel();
    voter.name = req.body.name;
    voter.email = req.body.email;
    voter.password = req.body.password;
    voter.constituency = req.body.constituency;
    voter.save();
    res.redirect("/loginpage.hbs");

});


router.get("/loginpage.hbs", (req, res)=>
{
    res.render("loginPage", {});
});







module.exports = router;