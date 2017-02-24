import React, { PropTypes } from 'react';

export default function TodoForm(props) {
  const { onChangeInput, currentTodo, refInput, handleSubmit } = props;
	return (
		<form action="" onSubmit={handleSubmit}>
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
  currentTodo: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};