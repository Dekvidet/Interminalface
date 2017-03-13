import React from 'react';
import style from './style.css';

const ConsoleDisplay = ({lines}) => (
	<div>
		{lines.map(line => <p>{line}</p>)}
	</div>
);

ConsoleDisplay.propTypes = {
	lines: React.PropTypes.array,
};

ConsoleDisplay.defaultProps = {
	lines: [],
};

export default ConsoleDisplay;