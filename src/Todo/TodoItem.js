import React, { PropTypes } from 'react';
import { partial } from '../lib/utils';


export default function TodoInput(props) {
	const { id, text, isComplete } = props;
	const handleToggle = partial(props.handleToggle, id);
	return (
		<li key={id}>
      <input type="checkbox" onChange={handleToggle} checked={isComplete} /> {text}
    </li>
	);
}

TodoInput.propTypes = {
	text: PropTypes.string.isRequired,
	isComplete: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired
}
