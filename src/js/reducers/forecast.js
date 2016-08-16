import Moment from 'moment';

const Reducer = (state = {}, action) => {
	let { type, values } = action;

	switch (type) {
		case 'FORECAST':
			return {
				list: values 
			};
	}

	return state;
};

export default Reducer;