import Moment from 'moment';
import { chain } from 'lodash';

const Reducer = (state = { list: 'toto' }, action) => {
	let { type, values } = action;

	switch (type) {
		case 'FORECAST':
			let { list } = values;

			return {
				list: chain(list)
					.map(({ dt_txt, main, weather }) => {
						return {
							day: dt_txt.split(' ')[0],
							hour: dt_txt.split(' ')[1],
							temp: main.temp,
							weather
						}
					})
					.groupBy('day')
					.value()
			}
		break;
	}

	return state;
};

export default Reducer;