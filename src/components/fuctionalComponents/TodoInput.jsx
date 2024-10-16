import React, { useState } from 'react';

const TodoInput = ({ lastItemId, addTodoItem }) => {
  const [input, setInput] = useState({ title: '', id: '', completed: false });

  const handleChange = (e) => {
    const todoId = Number(lastItemId) + 1;
    setInput({ ...input, title: e.target.value, id: todoId });
  };

  return (
    <div className="inputField">
      <input
        type="text"
        id="taskInput"
        placeholder="Write new task here..."
        onChange={handleChange}
      />

      <button className="addItemButton" onClick={() => addTodoItem(input)}>
        Add task
      </button>
    </div>
  );
};

export default TodoInput;
