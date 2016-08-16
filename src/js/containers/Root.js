import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ForecastList from './ForecastList';
import Highlight from './Highlight';

const Root = (element, store, city) => {
	ReactDOM.render(
		<Provider store={store}>
			<div>
				<Highlight city={city}/>
				<ForecastList />
				<div className="background"></div>
			</div>
		</Provider>,
		element
	)
};

export default Root;
