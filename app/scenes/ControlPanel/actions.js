import fileSystem from 'fs';

export const LOAD = 'control-panel/load';

const openSerialPort = () => (
	dispatch => {
		
	}
);

const loadSettings = (data) => ({
	type: LOAD,
	data,
});

export const fetchSettings = () => (
	dispatch => {
		fileSystem.readFile('./data/settings.json', 'utf-8', (error, data) => {
			if (error) {
				console.log(error);
			} else {
				dispatch(loadSettings(JSON.parse(data)));
				dispatch(openSerialPort());
			}
		});
	}
);

export const writeToSerial = (data) => (
	dispatch => {
		console.log(data);
	}
);

export default {
	fetchSettings,
	writeToSerial,
}