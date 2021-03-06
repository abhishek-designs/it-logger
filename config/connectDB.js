const mongoose = require("mongoose");

// Connect to the database
const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
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
