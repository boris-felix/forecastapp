import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './Layout';

const Root = (element, store) => {
	ReactDOM.render(
		<Provider store={store}>
			<Layout />
		</Provider>,
		element
	)
};

export default Root;
