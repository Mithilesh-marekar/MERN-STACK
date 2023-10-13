// Require dotenv
require('dotenv').config();
//1- Required Express
const express = require('express');
//2-  Creates an express APP
const app = express();


// 5- middleware
app.use((req, res, next) => {
    console.log("Middleware")
    next() //moves on to the next piece of Middleware after its completed.
})


// 4- Routes
app.get('/', (req, res) => {
    // res.send("Hello World"); //3- Sends a response to the client
    res.json({msg:'Hello World'}) //3- Sends a response to the client
})



//3-  Listen for request
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT: ${process.env.PORT}`)
})