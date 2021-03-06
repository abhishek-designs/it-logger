const mongoose = require("mongoose");

// Create a schema for techs
const techsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  date: {
    type: Date,
    default: new Date().toUTCString(),
  },
});

// Export the model
module.exports = mongoose.model("Techs", techsSchema);
