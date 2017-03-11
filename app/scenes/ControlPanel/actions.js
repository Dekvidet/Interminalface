import fileSystem from 'fs';
import { openPort, writeToPort } from 'services/serialPort';

export const LOAD = 'control-panel/load';
export const RED_SERIAL_DATA = 'control-panel/red-serial-data';

const loadSettings = (data) => ({
	type: LOAD,
	data,
});

const readFromSerial = (data) => {
	console.log(data.toString())
	return dispatch => ({
		type: RED_SERIAL_DATA,
		data,
	})
};

const openSerialPort = (path, portConfig) => (
	dispatch => {
		openPort(path, portConfig, null, readFromSerial);
	}
);

export const writeToSerial = (path, data) => (
	dispatch => {
		writeToPort(path, data);
	}
);


export const fetchSettings = () => (
	dispatch => {
		fileSystem.readFile('./data/settings.json', 'utf-8', (error, data) => {
			if (error) {
				console.log(error);
			} else {
				const settings = JSON.parse(data);
				settings.serialConfig.portConfig.baudRate = parseInt(settings.serialConfig.portConfig.baudRate, 10);
				settings.serialConfig.portConfig.dataBits = parseInt(settings.serialConfig.portConfig.dataBits, 10);
				settings.serialConfig.portConfig.stopBits = parseInt(settings.serialConfig.portConfig.stopBits, 10);
				dispatch(loadSettings(settings));
				dispatch(openSerialPort(
					settings.serialConfig.path,
					settings.serialConfig.portConfig
				));
			}
		});
	}
);

export default {
	fetchSettings,
	writeToSerial,
}