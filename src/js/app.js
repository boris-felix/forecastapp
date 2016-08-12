import ReactDOM from 'react-dom';
import Root from './containers/Root';
import createStore from './store';
import DataFeeder from './initializer/DataFeeder';

class ForecastApp {
	constructor (domContainerId, city) {
		this.domContainer = document.getElementById(domContainerId);
		this.city = city;
		this.store = createStore();

		this.dataFeed = new DataFeeder(this.store);

		// Connect React dom render to redux store
		setTimeout(
			() => Root(this.domContainer, this.store),
			300
		);
	}
}

window.ForecastApp = ForecastApp;