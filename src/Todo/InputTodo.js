export defaut ({ id, text, isComplete }) => {
	return (
		<li key={id}>
      <input type="checkbox" defaultChecked={isComplete} /> {text}
    </li>
	);
}