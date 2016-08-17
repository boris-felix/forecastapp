import { combineReducers } from 'redux';
import forecast from './forecast';
import current from './current';
import daytime from './daytime';

const Reducers = combineReducers({
	forecast,
	current,
	daytime
});

export default Reducers;