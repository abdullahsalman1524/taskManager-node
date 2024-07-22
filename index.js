const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const mainRouter = require("./routes/main");
const connectDB = require("./db/conn");
require("dotenv").config();
require('express-async-errors');
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
// content type header is set to 'application/json'
app.use(express.json());

app.use("/api/v1/tasks", tasks);
// jab b api/v1 pe request aay to main router ke pass jana ha
app.use("/api/v1", mainRouter)
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.CONNSTRING);
    app.listen(8000, console.log("listening on 8000"));
  } catch (error) {
    console.log(error);
  }
};

start();
