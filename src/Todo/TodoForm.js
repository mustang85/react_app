import React, { PropTypes } from 'react';

export default function TodoForm({ onChangeInput, currentTodo, refInput }) {
	return (
		<form action="">
      <input 
        onChange={onChangeInput}
        type="text"
        ref={refInput}
        defaultValue={currentTodo} 
      />
    </form>
	);
}

TodoForm.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  refInput: PropTypes.func.isRequired,
  currentTodo: PropTypes.string.isRequired
};