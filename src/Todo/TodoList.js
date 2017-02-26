import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const { todos, handleToggle, handleRemove } = props;
  return (
    <div className="Todo-List">
      <ul>
        { 
        	todos.map(todo => {
          	return (
              <TodoItem key={todo.id}
                handleToggle={handleToggle}
                handleRemove={handleRemove} 
                {...todo} />
            );
        	}) 
        }
      </ul>
    </div>
  );
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired	
}