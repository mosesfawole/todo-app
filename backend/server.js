const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use("/api/todos", todoRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));
