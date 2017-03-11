import fileSystem from 'fs';
import { openPort, writeToPort } from 'services/serialPort';

export const LOAD = 'control-panel/load';
export const RED_SERIAL_DATA = 'control-panel/red-serial-data';

const openSerialPort = (path, portConfig) => (
	dispatch => {
		openPort(path, portConfig);
	}
);

const loadSettings = (data) => ({
	type: LOAD,
	data,
});

const readFromSerial = (data) => (
	dispatch => {
		type: RED_SERIAL_DATA,
		data,
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
				dispatch(loadSettings(settings));
				dispatch(openSerialPort(
					settings.serialConfig.path,
					settings.serialConfig.portConfig,
					null,
					readFromSerial
				));
			}
		});
	}
);

export default {
	fetchSettings,
	writeToSerial,
}