import { combineReducers } from 'redux';
import { LOAD_SETTINGS } from './actions';
import consoleLines from './scenes/ConsoleDisplay/reducers';

const initialState = {
	buttons: [],
};

const settings = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_SETTINGS:
			return action.data;
		default:
			return state
	}
}

const controlPanel = combineReducers({
	settings,
	consoleLines,
});

export default controlPanel;