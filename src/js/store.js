import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ForecastMiddleWare from './middleware/forecast';

const Store = () => {
	const createStoreWithMiddleware = compose(
		applyMiddleware()
	)(createStore);

	return createStoreWithMiddleware(reducers);
};

export default Store;
