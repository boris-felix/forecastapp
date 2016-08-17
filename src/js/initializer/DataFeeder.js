import Moment from 'moment';
import { chain, size, toArray } from 'lodash';
import {
    CURRENT,
    FORECAST,
    DAY_TIME
} from '../constants/actionTypes';

const APP_ID = 'a898a3523830662b0223c37cfea04659';

class DataFeeder {
	static fetch (store, city) {
		DataFeeder.get(city).then((r) => {
			let { list } = r;
			let values = chain(list)
				.map(({ dt_txt, main, weather }) => {
					let { temp, temp_max, temp_min } = main;

					return {
						day: dt_txt.split(' ')[0],
						hour: dt_txt.split(' ')[1],
						temp,
						temp_min,
						temp_max,
						weather
					};
				})
				.groupBy('day')
				.value();

			store.dispatch({
				type: FORECAST,
				values: values
			});

			if (size(values) > 0) {
				store.dispatch({
					type: CURRENT,
					values: toArray(values)[0]
				});
			}

			store.dispatch({
				type: DAY_TIME,
				time: parseInt(Moment().format('HH'), 10)
			});
		});
	}

	static get (city) {
		return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&units=metric&appid=${APP_ID}`).then(r => {
			if (!r.ok) { throw r; }
			return r.json();
		});
	}
}

export default DataFeeder;