const express = require("express");
const logsRouter = require("./routes/logsRoute");
const techsRouter = require("./routes/techsRoute");
const config = require("config");
const connectDB = require("./config/connectDB");

// Intialize the express app
const app = express();

// Creating the middlewares
app.use(express.json());
app.use("/logs", logsRouter);
app.use("/techs", techsRouter);

// Connect the database
connectDB(config.get("MONGO_URI"));

// Create a test GET route
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

// Listen to the PORT
app.listen(PORT, () => console.log(`Server running at PORT ${PORT}...`));
