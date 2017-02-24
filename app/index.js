import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from 'scenes/ControlPanel';

const render = (Component) => {
	ReactDOM.render(
		<Component/>,
		document.getElementById('root')
	);
};

render(ControlPanel);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('/', () => {
		render(ControlPanel)
	});
}