const Veggie = require("../models/veggie");

const getVeggies = async (req, res) => {
  try {
    let allVeggies = await Veggie.find();
    res.send(allVeggies);
  } catch (error) {
    console.error("Error retrieving veggie list: ", error);
    res.status(500).send("Error retrieving veggie list");
  }
};

const createVeggie = async(req, res) =>{
    try {
        const newVeggie = await Veggie.create(req.body)
        res.send(newVeggie);
    } catch (error) {
        console.error("Error creating new veggie: ", error);
        res.status(500).send("Error creating new veggie");
    }
};

const VeggieByName = async(req, res) =>{
    try{
        const veggie = await Veggie.findOne({ name: req.params.veggieName });
        if (!veggie) {
            res.status(400).send("Veggie not found")
        } else {
            res.send(veggie)
        }
    } catch (error) {
        console.error("Error creating new veggie: ", error);
        res.status(500).send("Error creating new veggie");
    }
}

module.exports = {
  getVeggies,
  createVeggie,
  VeggieByName
};
