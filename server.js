const express=require("express");
const path=require("path");
const app=express();
var PORT=process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(express.static('public'));
app.use("/api/friends",require('./app/routing/apiRoutes.js'));
app.use("/",require('./app/routing/htmlRoutes.js'));

app.listen(PORT, function() {
    console.log("I can hear you... ");
});