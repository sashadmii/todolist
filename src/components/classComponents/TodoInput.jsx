import { Component } from 'react';

export default class TodoInput extends Component {
  state = {
    title: '',
    id: '',
    completed: false,
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const todoId = Number(this.props.lastItemId) + 1;
    this.setState({ ...this.state, title: e.target.value, id: todoId });
  }

  render() {
    return (
      <div className="inputField">
        <input
          type="text"
          id="taskInput"
          placeholder="Write new task here..."
          onChange={this.handleChange}
        />

        <button
          className="addItemButton"
          onClick={() => this.props.addTodoItem(this.state)}>
          Add task
        </button>
      </div>
    );
  }
}
