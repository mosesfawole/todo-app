import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todoSlice";
const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      toast.error("Please enter a text");
    }
    setText("");

    dispatch(createTodo({ text }));
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Todo</label>
          <input
            type="text"
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
