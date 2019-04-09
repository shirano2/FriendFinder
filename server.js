/* dependencies */
const express=require("express");
const path=require("path");

/* creating an express server */
const app=express();
var PORT=process.env.PORT || 3000;

/* sets up to handle data parsing */
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

/* routes */
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app,path);

/* listener */
app.listen(PORT, function() {
    console.log("I can hear you... ");
});