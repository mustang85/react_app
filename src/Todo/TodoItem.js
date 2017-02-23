import React, { PropTypes } from 'react';

export default function TodoInput({ id, text, isComplete }) {
	return (
		<li key={id}>
      <input type="checkbox" defaultChecked={isComplete} /> {text}
    </li>
	);
}

TodoInput.propTypes = {
	text: PropTypes.string.isRequired,
	isComplete: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired
}
