import React from 'react';
import ControlButton from '../ControlButton';
import { addHighlightClass, removeHighlightClass } from '../../services/mapHighlighter';
import style from './style.css';

const ControlButtonGroup = ({data, onButtonClick, mapSelector}) => (
	<div
		className="panel panel-default"
		onMouseEnter={() => addHighlightClass(mapSelector)}
		onMouseLeave={() => removeHighlightClass(mapSelector)}
	>
		<div className="panel-heading">{data.label}</div>
		<div className="panel-body">
			<div className="row">
				<div className="center-block">
					<div className="btn-group" role="group" aria-label={data.label}>
						{data.buttons.map(button =>
							<ControlButton
								key={button.id}
								onButtonClick={() => onButtonClick(button.payload) }
								mapSelector={button.id}
							>{button.label}</ControlButton>
						)}
					</div>
				</div>
			</div>
		</div>
	</div>
);

ControlButtonGroup.propTypes = {
	data: React.PropTypes.object.isRequired,
	onButtonClick: React.PropTypes.func,
	mapSelector: React.PropTypes.string,
};

ControlButtonGroup.defaultProps = {
	onButtonClick: x => x,
	mapSelector: '',
};

export default ControlButtonGroup;