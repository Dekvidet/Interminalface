import { WRITE_CONSOLE_LINE } from './actions';

const consoleLines = (state = [], action) => {
	switch (action.type) {
		case WRITE_CONSOLE_LINE:
			return [...state, action.line];
		default:
			return state
	}
}

export default consoleLines;