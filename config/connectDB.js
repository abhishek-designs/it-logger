const mongoose = require("mongoose");
// const config = require("config");
require("dotenv").config();

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB connected");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
