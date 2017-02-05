import React from 'react';
import TodoItem from './TodoItem';

export default ({ todos }) => {
  return (
    <div className="Todo-List">
      <ul>
        { todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} />
        }) }
      </ul>
    </div>
  );
}