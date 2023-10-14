// requiring Express
const express = require("express");
//6- creates an instance of express router
const router = express.Router();

//15-Requiring Workout Schema
const Workout = require("../models/workoutModel");

//7- request handlers

// to get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "Get all WOrkouts" });
});

// to get a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// Post a NEW Workout
// 16-
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body; //requesting body for the document
// handeling response
  try {
    const workout = await Workout.create({ title, load, reps });//response will be stored in 'workout' once document is created
    res.status(200).json(workout); //Success
  } catch (error) {
     res.status(400).json({ error: error.message }); //Failure
  }
});

//Delete a Workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

//Update a Workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a workout" });
});

//8- exporting router
module.exports = router;
