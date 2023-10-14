//11- Requiring Mongoose
const mongoose = require("mongoose");

//12-accessing the Schema constructor from the Mongoose library
const schema = mongoose.Schema;

//13- Creating Schema
const workoutSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } //add the timestap to know when it was last updated
);

//14- exporting  model
module.exports = mongoose.model("workout", workoutSchema);
