const CustomApiError = require("../error/custom-error");

const login = async (req, res = {}) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomApiError("username and password required", 400);
  }

  res.send("Fake login register signup route");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "hello abdullah",
    secret: `here is your authorized data ${luckyNumber}`,
  });
  const task = await Task.create(req.body);
  res.status(201).json(task);
};

module.exports = {
  login,
  dashboard,
};
