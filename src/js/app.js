import angular from 'angular';
import jquery from 'jquery';
import Moment from 'moment';
import Directives from './directives';

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
	constructor (city) {
		var app = angular.module('ForecastApp', [
			'appDirectives'
		]);

		// As per : https://medium.com/swlh/improving-angular-performance-with-1-line-of-code-a1fb814a6476#.5kfftot3t
		app.config(['$compileProvider', function ($compileProvider) {
			$compileProvider.debugInfoEnabled(false);
		}]);

		app.run(['$rootScope', function($rootScope) {
			$rootScope.city = city;
			angular.element('#root').addClass(mapDayTime());
		}]);

		angular.bootstrap(document, ['ForecastApp']);	
	}
};

window.ForecastApp = ForecastApp;