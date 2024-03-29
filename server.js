const express = require("express");
const logsRouter = require("./routes/logsRoute");
const techsRouter = require("./routes/techsRoute");
// const config = require("config");
const connectDB = require("./config/connectDB");
const path = require("path");

// Intialize the express app
const app = express();

// Connect the database
connectDB();

// Creating the middlewares
app.use(express.json({ extended: true }));
app.use("/logs", logsRouter);
app.use("/techs", techsRouter);

// Check the platform wether it's a production or development
if (process.env.NODE_ENV === "production") {
  // App is in the production stage, then load the static index.html file
  app.use(express.static("client/build/"));
  app.get("*", (req, res) => {
    // If user hits any get route
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

// Listen to the PORT
app.listen(PORT, () => console.log(`Server running at PORT ${PORT}...`));
