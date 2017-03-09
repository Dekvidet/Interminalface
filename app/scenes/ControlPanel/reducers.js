import { LOAD } from './actions';

const initialState = {
	buttons: [],
};

const controlPanel = (state = initialState, action) => {
	switch (action.type) {
		case LOAD:
			return action.data;
		default:
			return state
	}
}

export default controlPanel;