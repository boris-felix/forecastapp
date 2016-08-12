class DataFeeder {
	constructor (store) {
		this.init().then((r) => {
			console.log(arguments);
			store.dispatch({
				type: 'FORECAST',
				values: r
			});
		});
	}

	init () {
		return fetch('http://api.openweathermap.org/data/2.5/forecast?q=Biarritz,us&mode=json&units=metric&appid=a898a3523830662b0223c37cfea04659').then(r => {
			if (!r.ok) { throw r; }
			return r.json();
		});
	}
}

export default DataFeeder;