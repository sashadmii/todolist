import React, { useState, useEffect } from 'react';

import TodoItem from '../components/fuctionalComponents/TodoItem';
import TodoInput from '../components/fuctionalComponents/TodoInput';

import { getTodos, deleteTodo, addTodo } from '../api/api';

const TodoList = () => {
  const [todos, setTodos] = useState({ todos: [], lastItemId: 0 });

  const fetchTodos = async () => {
    const todosList = await getTodos();
    setTodos({
      todos: todosList,
      lastItemId: todosList[todosList.length - 1].id,
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodoItem = (id) => {
    deleteTodo(id);
    const updatedList = todos.todos.filter((todo) => id !== todo.id);
    setTodos({ ...todos, todos: updatedList });
  };

  const addTodoItem = (item) => {
    addTodo(item);
    setTodos({
      todos: [...todos.todos, item],
      lastItemId: todos.todos[todos.todos.length - 1].id,
    });

    document.getElementById('taskInput').value = '';
  };

  return (
    <div className="container">
      <TodoInput addTodoItem={addTodoItem} lastItemId={todos.lastItemId} />

      <ol>
        {todos.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodoItem={deleteTodoItem} />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
