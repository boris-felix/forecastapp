import angular from 'angular';
import 'angular-resource';
import { chain, size } from 'lodash';

const APP_ID = 'a898a3523830662b0223c37cfea04659';
let resource;

class WeatherService {
	constructor ($resource) {
		this.$resource = $resource;
	}

	fetch (city) {
		return this.get(city).then((r) => {
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

			return values;
		});
	}

	get (city) {
		return this.$resource(
			`http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&units=metric&appid=${APP_ID}`,
			{}
		).get().$promise;
	}
}

var app = angular.module('WeatherService', [
	'ngResource'
]);	

app.factory('WeatherService', [
	'$resource',
	'$location',
	function($resource, $location) {
		return new WeatherService($resource);
	}
]);

export default app;