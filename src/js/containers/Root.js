import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ForecastList from './ForecastList';

const Root = (element, store, city) => {
	ReactDOM.render(
		<Provider store={store}>
			<div>
				<h1>{city}</h1>
				<ForecastList />
			</div>
		</Provider>,
		element
	)
};

export default Root;
