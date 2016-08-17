import ReactDOM from 'react-dom';
import Root from './containers/Root';
import DataFeeder from './initializer/DataFeeder';
import Store from './store';

const POLL_INTERVAL =  3600 * 1000;

class ForecastApp {
	constructor (domContainerId, city) {
		this.init(domContainerId, city);
	}

	fetchDatas (city) {
		DataFeeder.fetch(Store, city);
		// Fetch new datas every hours is enough
		setTimeout(() => this.fetchDatas(), POLL_INTERVAL);
	};

	init (domContainerId, city) {
		let domContainer = document.getElementById(domContainerId);

		this.fetchDatas(city);
		// Connect React dom render to redux store
		setTimeout(() => Root(domContainer, Store, city), 300);
	};
};

window.ForecastApp = ForecastApp;

export default ForecastApp;