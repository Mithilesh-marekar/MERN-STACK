//15-Requiring Workout Schema
const Workout = require("../models/workoutModel");
// requiring mongoose
const mongoose = require('mongoose');

//17- Request Handlers
// Get all workout
const get_All_Workout = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workout)
}

// Get a Single Workout
const get_Single_workout = async(req, res) => {
    const { id }  = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Workout"})
    }
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:"No Such Workout"})
    }

    res.status(200).json(workout)
}


// Create(POST) New Workout
const create_Workout = async (req, res) => {
  const { title, load, reps } = req.body; //requesting body for the document
  // handeling response
  try {
    const workout = await Workout.create({ title, load, reps }); //response will be stored in 'workout' once document is created
    res.status(200).json(workout); //Success
  } catch (error) {
    res.status(400).json({ error: error.message }); //Failure
  }
};

// Delete a Workouut
const delete_Workout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Workout"})
    }
    const workout = await Workout.deleteOne({ _id: id })
    if(!workout){
        return res.status(404).json({error:"No Such Workout"})
    }
    res.status(200).json(workout)
}

// update a Workout
const update_Workout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Workout"})
}
const workout = await Workout.findOneAndUpdate({_id: id},{
    ...req.body
})
if(!workout){
    return res.status(404).json({error:"No Such Workout"})
    }
    res.status(200).json(workout)
}


//18- Exporting request Handlers to routes
module.exports = {
    create_Workout,
    get_All_Workout,
    get_Single_workout,
    delete_Workout,
    update_Workout
}