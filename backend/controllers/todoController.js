// @desc Get todos
// @route GET /api/todos
// @access Private
const getTodos = (req, res) => {
  res.status(200).json({ message: "Get todos" });
};

// @desc Set todos
// @route POST /api/todos
// @access Private
const setTodo = (req, res) => {
  res.status(200).json({ message: "Get todos" });
};

// @desc Uodate todos
// @route PUT /api/todos
// @access Private
const updateTodo = (req, res) => {
  res.status(200).json({ message: `Update todo ${req.params.id}` });
};

// @desc Delete todos
// @route DELETE /api/todos
// @access Private
const deleteTodo = (req, res) => {
  res.status(200).json({ message: `Delete todo ${req.params.id}` });
};

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
