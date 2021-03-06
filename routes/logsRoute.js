const express = require("express");
const { body, validationResult } = require("express-validator");

// Create a route
const router = express.Router();

// Create a logs route

// @method      GET
// @desc        To fetch the logs
// @endpoint    /logs
router.get("/", (req, res) => {
  res.send("Fetch the logs");
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
  (req, res) => {
    // Get the log data from the request body
    const log = req.body;
    // Doing some validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json(errors);
    // If the data is valid then store it
    res.status(201).json({ msg: "Log created", log });
  }
);

// @method      PUT
// @desc        To update a log
// @endpoint    /logs/:logid
router.put("/:logid", (req, res) => {
  res.send("Update a log");
});

// @method      DELETE
// @desc        To delete a log
// @endpoint    /logs/:logid
router.delete("/:logid", (req, res) => {
  res.send("Delete a log");
});

// Export the routers
module.exports = router;
