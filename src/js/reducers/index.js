import { combineReducers } from 'redux';
import forecast from './forecast';
import current from './current';

const Reducers = combineReducers({
	forecast,
	current
});

export default Reducers;