// Importing Express module 
var express = require('express');

// Creating an object instance of the express
var app = express();

// Sending the comtent to home route via get method
app.get('/', (req, res) => {
    res.send("Go zoom with express.js");
});

//Making the app my pet(listen to me)
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
   });