const express=require("express");
const router = express.Router();
const friendArray=require("../data/friends.js");

router.use(function timeLog(req, res, next) {
    next(); 
});

router.get("/",function(req,res){
    res.json(friendArray);
});

router.post("/",function(req,res){
    var newFriend=req.body;
    var matchFriend;
    var match;
    var score=0;
    for(var i=0;i<friendArray.length;i++) {
        for(var j=0;j<friendArray[i].scores.length;j++) {
            score=score+Math.abs(friendArray[i].scores[j]-newFriend.scores[j]);
        }
        if(match==undefined || score<match) {
            match=score;
            matchFriend=friendArray[i];
        }
        score=0;
    }
    friendArray.push(newFriend);
    res.json(matchFriend);
});

module.exports=router;