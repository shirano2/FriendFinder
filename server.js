const express=require("express");
const path=require("path");
const app=express();

var PORT=process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

var friendArray=[
    {
        "name":"Joy",
        "photo":"https://i.pinimg.com/originals/b0/96/6b/b0966b8143669aa19c5a46a47c4bce0c.jpg",
        "scores":[
            1,
            1,
            5,
            4,
            1,
            1,
            5,
            5,
            1,
            2
          ]
    },
    {
        "name":"Yeri",
        "photo":"https://i.pinimg.com/736x/a6/d3/eb/a6d3eb713edef1b7db2ce19b09a3d38f.jpg",
        "scores":[
            2,
            2,
            4,
            5,
            2,
            2,
            4,
            4,
            2,
            1
          ]
    },
    {
        "name":"Seulgi",
        "photo":"https://pbs.twimg.com/media/CbqXZelUsAAsLFT.jpg",
        "scores":[
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3
          ]
    },
    {
        "name":"Wendy",
        "photo":"https://img.kpopmap.com/2019/01/red-velvet-wendy-hair-cut-6.jpg",
        "scores":[
            4,
            4,
            2,
            1,
            5,
            4,
            2,
            2,
            4,
            5
          ]
    },
    {
        "name":"Irene",
        "photo":"http://kpoprookies.com/wp-content/uploads/2015/10/Red-Velvet-Irene-Member-Profile-and-Facts-1.png",
        "scores":[
            5,
            5,
            1,
            2,
            2,
            5,
            1,
            1,
            5,
            4
          ]
    }
];

app.listen(PORT, function(){
    console.log("I can hear you... ");
});

app.get("/api/friends",function(req,res){
    res.json(friendArray);
});

app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname,"app/public/survey.html"));
});

app.post("/api/friends",function(req,res){
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

app.get("/*",function(req,res) {
    res.sendFile(path.join(__dirname,"app/public/home.html"));
});



// app.get("/:anything",function(req,res){
//     if(req.params.anything) {
//         res.sendFile(path.join(__dirname,"app/public/home.html"));
//     }
// });



