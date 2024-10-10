import { Component } from 'react';
import { ReactComponent as BinIcon } from '../icons/binIcon.svg';

export default class TodoItem extends Component {
  render() {
    return (
      <li>
        {this.props.todo?.title}
        <button
          className="itemButton"
          onClick={() => this.props.deleteTodoItem(this.props.todo.id)}>
          <BinIcon />
        </button>
      </li>
    );
  }
}
