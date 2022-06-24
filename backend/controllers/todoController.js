const asyncHandler = require("express-async-handler");

const Todo = require("../models/todoModel");
// @desc Get todos
// @route GET /api/todos
// @access Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();

  res.status(200).json(todos);
});

// @desc Set todos
// @route POST /api/todos
// @access Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const todo = await Todo.create({
    text: req.body.text,
  });

  res.status(200).json(todo);
});

// @desc Uodate todos
// @route PUT /api/todos
// @access Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
});

// @desc Delete todos
// @route DELETE /api/todos
// @access Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  await todo.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
