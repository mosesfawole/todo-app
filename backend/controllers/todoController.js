const asyncHandler = require("express-async-handler");
// @desc Get todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get todos" });
});

// @desc Set todos
// @route POST /api/todos
// @access Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Set todo" });
});

// @desc Uodate todos
// @route PUT /api/todos
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update todo ${req.params.id}` });
});

// @desc Delete todos
// @route DELETE /api/todos
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete todo ${req.params.id}` });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
