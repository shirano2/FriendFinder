const express=require("express");
const path=require("path");
const app=express();
var PORT=process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app,path);

app.listen(PORT, function() {
    console.log("I can hear you... ");
});