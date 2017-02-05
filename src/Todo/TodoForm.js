import React from 'react';

export default ({ onChangeInput, currentTodo, refInput }) => {
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