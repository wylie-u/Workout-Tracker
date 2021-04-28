const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // date.now will return current date
  day: {
    type: Date,
    default: Date.now
  },
  excercises: [
    {
      type: {
        type: String,
        required: "Choose an exercise",
      },
      name: {
        type: String,
        required: "Choose an name",
      },
      duration: {
        type: Number,
        required: "Choose an duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
