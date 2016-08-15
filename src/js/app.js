import ReactDOM from 'react-dom';
import Root from './containers/Root';
import DataFeeder from './initializer/DataFeeder';
import Store from './store';
import Moment from 'moment';

const mapDayTime = () => {
	var time = parseInt(Moment().format('HH'), 10);

	if(time >= 0 && time <= 8) {
		return 'early-morning';
	} else if (time >= 8 && time <= 12) {
		return 'morning';
	} else if (time >= 12 && time <= 18) {
		return 'afternoon';
	} else if (time >= 18 && time <= 24) {
		return 'evening'; 
	}
};

class ForecastApp {
	constructor (domContainerId, city) {
		let domContainer = document.getElementById(domContainerId);

		const init = () => {
			DataFeeder.fetch(Store, city);
			// Fetch new datas every hours is enough
			domContainer.className = mapDayTime();
		};

		init();

		let dataFeed = setInterval(() => init(), 3600 * 1000);

		// Connect React dom render to redux store
		setTimeout(
			() => Root(domContainer, Store, city),
			300
		);
	}
};

window.ForecastApp = ForecastApp;