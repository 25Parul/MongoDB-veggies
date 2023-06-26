const mongoose = require("mongoose");

// Create the Veggie Schema
const veggieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: String,
    origin: String,
    price: { type: Number, required: true },
    quantity: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Create the Veggie model and export it
const Veggie = mongoose.model("Veggie", veggieSchema);

module.exports = Veggie;
