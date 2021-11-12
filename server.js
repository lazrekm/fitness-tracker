// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// initialize server
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// setting up routes
app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });