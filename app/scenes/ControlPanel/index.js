import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSettings, writeToSerial } from './actions';
import ControlButton from './components/ControlButton';
import ControlButtonGroup from './components/ControlButtonGroup';
import ConsoleDisplay from './scenes/ConsoleDisplay';
import style from './style.css';

const mapStateToProps = store => store.controlPanel;

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSettings, writeToSerial }, dispatch);

class ControlPanel extends React.Component {

	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchSettings();
	}

	render() {
		return (
			<div className={style.flexContainer}>
				<div className={style.controlContainer}>
					<h1>MatrixControl</h1>
					<div className={style.buttonContainer}>
						<div className="">
							{this.props.settings.buttons.map(button =>
								<ControlButton
									key={button.id}
									mapSelector={button.id}
									selectorClass={button.selectorClass}
									onButtonClick={() => (
										this.props.writeToSerial(
											this.props.settings.serialConfig.path,
											button.payload
										)
									) }
								>{button.label}</ControlButton>
							)}
						</div>
						{this.props.settings.buttonGroups && this.props.settings.buttonGroups.map(buttonGroup =>
							<ControlButtonGroup
								key={buttonGroup.id}
								mapSelector={buttonGroup.id}
								selectorClass={buttonGroup.selectorClass}
								data={buttonGroup}
								onButtonClick={payload => (
									this.props.writeToSerial(
										this.props.settings.serialConfig.path,
										payload
									)
								)}
							/>
						)}
					</div>
					<div className={style.consoleContainer}>
						<ConsoleDisplay lines={this.props.consoleLines} />
					</div>
				</div>
				<div className={style.mapContainer}>
					<object id="map" data="data/illustration.svg" type="image/svg+xml" style={{width: '100%', height: '100%'}}></object>
				</div>
			</div>
		);
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);