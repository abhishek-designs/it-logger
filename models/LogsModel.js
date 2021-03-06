const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  message: String,
  tech: String,
  attention: Boolean,
  date: {
    type: Date,
    default: new Date().toUTCString(),
  },
});

module.exports = mongoose.model("Logs", logsSchema);
