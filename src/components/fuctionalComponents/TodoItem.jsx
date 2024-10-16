import React from 'react';
import { ReactComponent as BinIcon } from '../../icons/binIcon.svg';

const TodoItem = ({ todo, deleteTodoItem }) => {
  return (
    <li>
      {todo?.title}
      <button className="itemButton" onClick={() => deleteTodoItem(todo.id)}>
        <BinIcon />
      </button>
    </li>
  );
};

export default TodoItem;
