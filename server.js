const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/workouts");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// static files 
app.use(express.static("public"));

// edit localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://wylieurig:Bobolaru1!@cluster0.p9xz2.mongodb.net/workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
