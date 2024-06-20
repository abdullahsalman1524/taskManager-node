const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/tasks");

// old version
// router.route('/').get((req, res) => {
//   res.send("all item found");
// })
// new version using controller
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

module.exports = router;
