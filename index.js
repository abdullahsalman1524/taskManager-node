const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/conn");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
// content type header is set to 'application/json'
app.use(express.json());

app.use("/api/v1/tasks", tasks);
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
