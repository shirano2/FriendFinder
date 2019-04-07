const express=require("express");
const router = express.Router();
const path=require("path");

router.use(function timeLog(req, res, next) {
    next(); 
});

router.get("/",function(req,res) {
    res.sendFile(path.join(__dirname,"../public/survey.html"));
});

module.exports=router;