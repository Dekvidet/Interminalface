import React from 'react';
import style from './style.css';

const ConsoleDisplay = ({lines}) => (
	<div className={style.consoleDisplay}>
		{lines.map(line => <p className={`${style.line} ${line.type}`}>{line.data}</p>)}
	</div>
);

ConsoleDisplay.propTypes = {
	lines: React.PropTypes.array,
};

ConsoleDisplay.defaultProps = {
	lines: [],
};

export default ConsoleDisplay;