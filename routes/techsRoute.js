const express = require("express");
const Techs = require("../models/TechsModel");
const { body, validationResult } = require("express-validator");

// Create a router
const router = express.Router();

// Creating techs routes

// @method      GET
// desc         To fetch the techs
// @endpoint    /techs
router.get("/", async (req, res) => {
  // Fetch the techinicians from the database
  try {
    const techs = await Techs.find();
    // Send the response to the client
    res.status(200).json(techs);
  } catch (err) {
    // Show the error
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @method      POST
// @desc        To create a tech
// @endpoint    /techs
router.post(
  "/",
  body("firstName")
    .not()
    .isEmpty()
    .withMessage("Please enter your firstname")
    .isString()
    .withMessage("Should be a valid name"),
  body("lastName")
    .not()
    .isEmpty()
    .withMessage("Please enter your lastname")
    .isString()
    .withMessage("Should be a valid name"),
  async (req, res) => {
    // Fetch the data through request body from the client
    const tech = req.body;
    // Doing some validations before saving the data
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    // Save the tech to the database if it is valid
    const techs = new Techs(tech);
    try {
      const savedTech = await techs.save();
      // Send the response to the client
      res.status(201).json({ msg: "Technician added", tech: savedTech });
    } catch (err) {
      // Show the error
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @method      DELETE
// @desc        To delete a tech
// @endpoint    /techs/:techid
router.delete("/:techid", async (req, res) => {
  // Fetch the id from the client through request parameter
  const id = req.params.techid;
  // Delete the tech from the database through id
  try {
    await Techs.findByIdAndDelete(id);
    // Send the response to the client
    res.status(200).json({ msg: "Tech removed" });
  } catch (err) {
    // Show the error
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Export the router
module.exports = router;
