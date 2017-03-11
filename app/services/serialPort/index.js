import SerialPort from 'serialport';
//var SerialPort = require('serialport');

const serialPorts = {};

export const openPort = (path, portConfig, onOpen = null, onData = null) => {
	if (!serialPorts[path]) {
		serialPorts[path] = new SerialPort(path, portConfig);
	}

	if (onOpen) {
		port.on('open', onOpen);
	}

	if (onData) {
		port.on('data', onData);
	}

	return serialPorts[path];
};

export const writeToPort = (path, data, onError = null, mode = 'ascii') => {
	if (serialPorts[path]) {
		const dataBuffer = new Buffer(data, mode);
		console.log(buf.toString('hex'));
		serialPorts[path].write(dataBuffer, error => {
			if (error && onError) {
				onError(error);
			}
		});
	} else {
		if (onError) {
			onError({
				message: 'There is no open serial port with this path. Did you opened it?';
			});
		}
	}
};

export const getPort = path => serialPorts[path] || null;