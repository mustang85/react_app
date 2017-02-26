import React, { PropTypes } from 'react';
import { partial } from '../lib/utils';


export default function TodoItem(props) {
  const { id, text, isComplete } = props;
  const handleToggle = partial(props.handleToggle, id);
  const handleRemove = partial(props.handleRemove, id);
  return (
	<li key={id}>
	  <span className="delete-item">
	  	<a href="#" onClick={handleRemove}>X</a>
	  </span>
      <input type="checkbox" 
        onChange={handleToggle} 
        checked={isComplete} 
      /> {text}
    </li>
  );
}

TodoItem.propTypes = {
	text: PropTypes.string.isRequired,
	isComplete: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired
}
