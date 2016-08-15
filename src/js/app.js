import ReactDOM from 'react-dom';
import Root from './containers/Root';
import DataFeeder from './initializer/DataFeeder';
import Store from './store';

class ForecastApp {
	constructor (domContainerId, city) {
		let domContainer = document.getElementById(domContainerId);
		let dataFeed = DataFeeder.fetch(Store, city);

		// Connect React dom render to redux store
		setTimeout(
			() => Root(domContainer, Store, city),
			300
		);
	}
};

window.ForecastApp = ForecastApp;