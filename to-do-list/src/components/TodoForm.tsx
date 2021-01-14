import { Button, TextField } from "@material-ui/core";
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const uuid = require('uuid');

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      // Reset task input
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
      label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
