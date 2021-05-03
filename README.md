# Workout-Tracker

# Description

This project creates an application used to create and track daily workouts. The user is able to log multiple exercises in a workout on a given day, including the ability to track the name, type, weight, sets, reps, and duration of exercise. 

This application utilizes MongoDB, Mongoose JS as well as Robo 3T, which hosts the MongoDB deployments. To give the user the ability to add up and return the total duration for each workout, the application utilizes MongoDB's aggregate function, as well as the $addFields and $sum operators. 

The app is deployed through Heroku. **[Check out the site here!](https://wy-workout-tracker.herokuapp.com/)**


## Table of Contents

 * [User Story](#User-Story)
 * [Building Tools](#Building-Tools)
 * [Credits](#Credits)



![Site Photo](/public/images/workout_main.png)
![Site Photo](/public/images/workout_dashboard.png)

## User Story
<pre><code>AS a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.
</code></pre>

## Building Tools 

 * HTML, CSS
 * Javascript 
 * MongooseJS
 * Robo 3T
 * Heroku
 * Express

## Credits
1. https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/
2. https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
3. https://docs.mongodb.com/manual/aggregation/
4. https://robomongo.org/