
// requiring Express
const express = require('express');
//6- creates an instance of express router
const router = express.Router();


//7- request handlers
    
// to get all workouts
router.get('/',(req, res) => {
    res.json({msg:"Get all WOrkouts"})
})
 
// to get a single workout
router.get('/:id', (req, res) => {
    res.json({msg:'GET a single workout'})
})


// Post a NEW Workout
router.post('/',(req, res) => {
    res.json({msg:'POST a new workout'})
})

//Delete a Workout
router.delete('/:id',(req, res)=> {
res.json({msg:'DELETE a workout'})
});


//Update a Workout
router.patch('/:id',(req, res) => {
    res.json({msg:'Update a workout'})
})

//8- exporting router
module.exports = router;