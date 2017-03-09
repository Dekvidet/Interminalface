import React from 'react';
import { addHighlightClass, removeHighlightClass } from '../../services/mapHighlighter';
import style from './style.css';

const ControlButton = ({onButtonClick, mapSelector, children, }) => (
	<button
		onClick={onButtonClick}
		onMouseEnter={() => addHighlightClass(mapSelector)}
		onMouseLeave={() => removeHighlightClass(mapSelector)}
		className={`btn btn-default ${style.controlButton}`}
	>{children}</button>
);

ControlButton.propTypes = {
	onButtonClick: React.PropTypes.func,
	mapSelector: React.PropTypes.string,
	children: React.PropTypes.string,
};

ControlButton.defaultProps = {
	onButtonClick: x => x,
	mapSelector: '',
	children: '',
};

export default ControlButton;