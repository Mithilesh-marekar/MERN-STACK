// Require dotenv
require('dotenv').config();
//1- Required Express
const express = require('express');

// 9- Required workouts from Routes
const workoutRoutes = require('./routes/workouts')

//2-  Creates an express APP
const app = express();

//10- middleware
//fort the POST and PATCH request we are sending data to the server to add a new data. we can access it with 'req' object but we can only access if we use a bit of middleware in express app and i.e express.json()
// so any request that comes in , it looks for the body to the request some data we are sending to the server and if it does , then it patches it or attaches it to request object 'req'. so that we can access it in the request handler.
app.use(express.json())


// 5- middleware
app.use((req, res, next) => {
    console.log("Middleware")
    next() //moves on to the next piece of Middleware after its completed.
})


// 4- Routes
app.use('/api/workouts',workoutRoutes);



//3-  Listen for request
app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT: ${process.env.PORT}`)
})