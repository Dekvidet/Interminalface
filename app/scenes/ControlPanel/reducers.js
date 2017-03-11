import { LOAD, RED_SERIAL_DATA } from './actions';

const initialState = {
	buttons: [],
};

const controlPanel = (state = initialState, action) => {
	switch (action.type) {
		case LOAD:
			return action.data;
		case RED_SERIAL_DATA:
			console.log(action.data)
			//return action.data;
		default:
			return state
	}
}

export default controlPanel;