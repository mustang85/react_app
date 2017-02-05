import React from 'react';

export default ({ id, text, isComplete }) => {
	return <li key={id}><input type="checkbox" defaultChecked={isComplete} />{text}</li>
}