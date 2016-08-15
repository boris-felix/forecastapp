import Moment from 'moment';
import { chain } from 'lodash';

const Reducer = (state = {}, action) => {
	let { type, values } = action;

	switch (type) {
		case 'CURRENT':
			return values;
	}

	return state;
};

export default Reducer;