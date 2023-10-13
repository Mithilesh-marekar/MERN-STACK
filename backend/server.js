// Require dotenv
require("dotenv").config();
//Require Mongoose
const Mongoose = require("mongoose");
//1- Required Express
const express = require("express");

// 9- Required workouts from Routes
const workoutRoutes = require("./routes/workouts");
const { default: mongoose } = require("mongoose");

//2-  Creates an express APP
const app = express();

//10- middleware
app.use(express.json());

// 5- middleware
app.use((req, res, next) => {
  console.log("Middleware");
  next(); //moves on to the next piece of Middleware after its completed.
});

// 4- Routes
app.use("/api/workouts", workoutRoutes);

// 11- Connect To Db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //3-  Listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Listening on PORT: ${process.env.PORT} - Connected to DB`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDb ${error}`);
  });
