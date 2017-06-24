import React from 'react';
import ControlButton from '../ControlButton';
import { addHighlightClass, removeHighlightClass } from '../../services/mapHighlighter';

const ControlButtonGroup = ({data, onButtonClick, mapSelector, selectorClass}) => (
	<div
		className="panel panel-default"
		onMouseEnter={() => addHighlightClass(mapSelector, selectorClass)}
		onMouseLeave={() => removeHighlightClass(mapSelector, selectorClass)}
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
								selectorClass={button.selectorClass}
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
	selectorClass: React.PropTypes.string,
};

ControlButtonGroup.defaultProps = {
	onButtonClick: x => x,
	mapSelector: '',
	selectorClass: 'highlight',
};

export default ControlButtonGroup;