import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import controlPanel from 'scenes/ControlPanel/reducers';
import ControlPanel from 'scenes/ControlPanel';

let store = createStore(
	combineReducers({
		controlPanel,
	}),
	applyMiddleware(thunk)
);

const render = (Component) => {
	ReactDOM.render(
		<Provider store={store}>
			<Component/>
		</Provider>,
		document.getElementById('root')
	);
};

render(ControlPanel);

if (process.env.NODE_ENV !== 'production') {
	// Hot Module Replacement API
	if (module.hot) {
		module.hot.accept('/', () => {
			render(ControlPanel);
		});
	}
}
