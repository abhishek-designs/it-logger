const express = require("express");
const { body, validationResult } = require("express-validator");
const Logs = require("../models/LogsModel");

// Create a route
const router = express.Router();

// Create a logs route

// @method      GET
// @desc        To fetch the logs
// @endpoint    /logs
router.get("/", async (req, res) => {
  // Fetch the logs from the database first
  try {
    const logs = await Logs.find();
    res.status(200).json({ logs });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @method      POST
// @desc        To create a log
// @endpoint    /logs
router.post(
  "/",
  body("message")
    .not()
    .isEmpty()
    .withMessage("Please enter a message")
    .isString()
    .withMessage("Invalid message"),
  body("tech")
    .not()
    .isEmpty()
    .withMessage("Please assign a technician")
    .isString()
    .withMessage("Invalid technician"),
  body("attention").not().isEmpty().withMessage("Please provide the attention"),
  async (req, res) => {
    // Get the log data from the request body
    const log = req.body;
    // Doing some validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    // If the data is valid then store it
    const logs = new Logs(log);
    try {
      const savedLog = await logs.save();
      // Send the response to the client
      res.status(201).json({ msg: "Log saved", log: savedLog });
    } catch (err) {
      // Show the error
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @method      PUT
// @desc        To update a log
// @endpoint    /logs/:logid
router.put(
  "/:logid",
  body("message")
    .not()
    .isEmpty()
    .withMessage("Please enter a message")
    .isString()
    .withMessage("Invalid message"),
  body("tech")
    .not()
    .isEmpty()
    .withMessage("Please assign a technician")
    .isString()
    .withMessage("Invalid technician"),
  body("attention").not().isEmpty().withMessage("Please provide the attention"),
  async (req, res) => {
    // Get the data through request body from the client
    const id = req.params.logid;
    const log = req.body;
    // Doing some validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    // If the data is valid then update the data in the database
    try {
      const updatedLog = await Logs.findByIdAndUpdate(id, log, { new: true });
      // Send the response to the client
      res.status(200).json({ msg: "Log updated", log: updatedLog });
    } catch (err) {
      // Show the error
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @method      DELETE
// @desc        To delete a log
// @endpoint    /logs/:logid
router.delete("/:logid", async (req, res) => {
  // Delete a specific log from the database through id
  const id = req.params.logid;
  try {
    await Logs.findByIdAndDelete(id);
    // Send the response to the client
    res.status(200).json({ msg: "Log removed" });
  } catch (err) {
    // Show the error
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Export the routers
module.exports = router;
