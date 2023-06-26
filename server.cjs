const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

require("dotenv").config();

// Import the veggie model from model folder
const Veggie = require("./models/veggie.cjs");

// Connect to database as soon as the server starts
require("./config/database.cjs");

// Import all the callback functions created in controller for the CRUD operation
const {
  getVeggies,
  createVeggie,
  VeggieByName,
} = require("./controllers/veggies.cjs");

//Get All the veggies
app.get("/veggies", getVeggies);

//Create new Veggie
app.post("/create_veggie", createVeggie);

// Get veggie by its name
app.get("/veggie/:veggieName", VeggieByName);

app.listen(4004, () => {
  console.log("Listening on port 4004");
});
