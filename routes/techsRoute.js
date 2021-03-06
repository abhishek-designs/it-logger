const express = require("express");

// Create a router
const router = express.Router();

// Creating techs routes

// @method      GET
// desc         To fetch the techs
// @endpoint    /techs
router.get("/", (req, res) => {
  res.send("Fetch the techs");
});

// @method      POST
// @desc        To create a tech
// @endpoint    /techs
router.post("/", (req, res) => {
  res.send("Create a tech");
});

// @method      DELETE
// @desc        To delete a tech
// @endpoint    /techs/:techid
router.delete("/:techid", (req, res) => {
  res.send("Delete a tech");
});

// Export the router
module.exports = router;
