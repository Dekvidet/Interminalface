import { WRITE_CONSOLE_LINE } from './actions';

const consoleLines = (state = [], action) => {
	switch (action.type) {
		case WRITE_CONSOLE_LINE:
			let nextState = state.map(a => Object.assign({}, a));
			nextState.push(action.line);
			return nextState;
		default:
			return state
	}
}

export default consoleLines;