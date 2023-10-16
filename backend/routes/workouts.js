// requiring Express
const express = require("express");
//6- creates an instance of express router
const router = express.Router();

//19- importing request handlers from routes
const { 
  create_Workout,
  get_All_Workout,
  get_Single_workout,
  delete_Workout,
  update_Workout
} = require('../controller/workoutController')


//7- request handlers (Controllers)
//20
// to get all workouts
router.get("/", get_All_Workout)

// to get a single workout
router.get("/:id", get_Single_workout)

// Post a NEW Workout
// 16-
router.post("/", create_Workout)

//Delete a Workout
router.delete("/:id", delete_Workout)

//Update a Workout
router.patch("/:id", update_Workout )

//8- exporting router
module.exports = router;
