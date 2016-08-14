const APP_ID = 'a898a3523830662b0223c37cfea04659';

class DataFeeder {
	static fetch (store, city) {
		DataFeeder.get(city).then((r) => {
			store.dispatch({
				type: 'FORECAST',
				values: r
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