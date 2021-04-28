const router = require("express").Router();
const Workout = require("../models/workouts");

// get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });
// creating a new workout
  router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // updating workout by id
  router.put("/api/workouts/:id", (req, res) => {

      db.Workout.findOneAndUpdate(
          //find workout by id and update... then will send back into the exercises
          { _id: mongojs.ObjectId(req.params.id)} , { $push: { 
              exercises: req.body}}
          ).then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      
    
  })

  module.exports = router;
  