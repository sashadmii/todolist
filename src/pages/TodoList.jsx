import { Component } from 'react';

import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';

import { getTodos, deleteTodo, addTodo } from '../api/api';

export default class TodoList extends Component {
  state = {
    todos: [],
    lastItemId: 0,
  };

  constructor() {
    super();
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
  }

  deleteTodoItem(id) {
    deleteTodo(id);
    const updatedList = this.state.todos.filter((todo) => id !== todo.id);
    this.setState({ ...this.state, todos: updatedList });
  }

  addTodoItem(item) {
    addTodo(item);
    this.setState({
      ...this.state,
      todos: [...this.state.todos, item],
      lastItemId: this.state.todos[this.state.todos.length - 1].id,
    });

    document.getElementById('taskInput').value = '';
  }

  render() {
    return (
      <div className="container">
        <TodoInput
          addTodoItem={this.addTodoItem}
          lastItemId={this.state.lastItemId}
        />

        <ol>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodoItem={this.deleteTodoItem}
            />
          ))}
        </ol>
      </div>
    );
  }

  async componentDidMount() {
    const todosList = await getTodos();
    this.setState({
      ...this.state,
      todos: todosList,
      lastItemId: todosList[todosList.length - 1].id,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}
}
