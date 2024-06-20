const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../error/custom-error");

const getAllTasks = asyncWrapper(async (req, res = {}) => {
  const task = await Task.find({});
  res.status(201).json(task);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError("no task with this id available", 404));
    // return res.status(404).json({ message: "Task not found" });
  }
  res.status(201).json(task);
});

const updateTask = asyncWrapper(async (req, res = {}) => {
  const taskId = req.params.id;
  // new: true will return the new task objects
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidator: true,
  });
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(201).json(task);
});

const deleteTask = asyncWrapper(async (req, res = {}) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(201).json(task);
});

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
