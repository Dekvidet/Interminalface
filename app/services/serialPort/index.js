//import SerialPort from 'serialport';
//var SerialPort = require('serialport');
import { createInterface } from 'readline';

const serialPorts = {};

export const openPort = (path, portConfig, onOpen = null, onData = null) => {
	if (!serialPorts[path]) {
		serialPorts[path] = new SerialPort(path, portConfig);
	}

	if (onOpen) {
		serialPorts[path].on('open', onOpen);
	}

	if (onData) {
		const lineReader = createInterface({
			input: serialPorts[path],
		});

		lineReader.on('line', message => {
			onData({
				type: 'console-output',
				data: message,
			});
		});
	}

	return serialPorts[path];
};

export const writeToPort = (path, data, onError = null, mode = 'ascii') => {
	if (serialPorts[path]) {
		const dataBuffer = new Buffer(data, mode);
		console.log(`Data sent: ${dataBuffer}`);
		serialPorts[path].write(dataBuffer, error => {
			if (error && onError) {
				onError(error);
			}
		});
	} else {
		if (onError) {
			onError({
				message: 'There is no open serial port with this path. Did you opened it?',
			});
		}
	}
};

export const getPort = path => serialPorts[path] || null;