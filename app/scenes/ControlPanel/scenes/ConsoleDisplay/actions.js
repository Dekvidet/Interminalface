export const WRITE_CONSOLE_LINE = 'control-panel/console-display/red-serial-data';

export const writeConsoleLine = line => ({
	type: WRITE_CONSOLE_LINE,
	line,
});
