const router = require("express").Router();
const Workout = require("../models/workouts");

// get all workouts
router.get("/api/workouts", (req, res) => {
  //return the total duration for each workout
    Workout.aggregate([
    {
      $addFields: {
        // sum returns the sum of the specified expression (exercises.duration)
        totalDuration: { $sum: "$exercises.duration" }
      }
    }
    ])
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
  
// creating a new workout
  router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body).then((dbWorkout) => {
        console.log('test')
        res.json(dbWorkout);
      })
      .catch(err => {
        console.log(err)
        res.json(err);
      });
  });

  // updating workout by id
  router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(params.id, {
      $push: {
        exercises: body,
      },
    })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // workouts in range
   
  router.post("/api/workouts/range", ({ body }, res) => {
    Workout.aggregate( [
      {
        $addFields: {
          // sum returns the sum of the specified expression (exercises.duration)
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
      ])
      // limits amount of id's (workouts) to 7
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  module.exports = router;
  