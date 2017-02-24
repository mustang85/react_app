import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, handleToggle }) {
  return (
    <div className="Todo-List">
      <ul>
        { 
        	todos.map(todo => {
          	return <TodoItem handleToggle={handleToggle} key={todo.id} {...todo} />
        	}) 
        }
      </ul>
    </div>
  );
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired	
}