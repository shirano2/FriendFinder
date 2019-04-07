const express=require("express");
const path=require("path");
const app=express();
var PORT=process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static('public'));
app.use("/survey",require('./app/routing/htmlRoutes.js'));
app.use("/api/friends",require('./app/routing/apiRoutes.js'));

app.get("/*",function(req,res) {
    res.sendFile(path.join(__dirname,"app/public/home.html"));
});

app.listen(PORT, function(){
    console.log("I can hear you... ");
});