import Moment from 'moment';
import { chain } from 'lodash';
import {
    CURRENT
} from '../constants/actionTypes';

const Reducer = (state = {}, action) => {
	let { type, values } = action;

	switch (type) {
		case CURRENT:
			let now = values[0];
			let { temp, weather } = now;
			let { description } = weather[0];

			return {
				temp,
				description
			};
	}

	return state;
};

export default Reducer;