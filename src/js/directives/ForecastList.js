import angular from 'angular';
import tpl from '../templates/forecast-list.view.html';
import WeatherService from '../services/weather';
import { toArray, size } from 'lodash';

export default ['forecastList', ($rootScope, $timeout, WeatherService) => {
	const link = (scope, element, attrs) => {
		scope.POLL_INTERVAL = 3600 * 1000;
		scope.current = [];

		scope.fetchDatas = () => {
			WeatherService.fetch(
				$rootScope.city
			).then((values) => {
				$timeout(scope.updateDatas(values));
			});
		};

		scope.updateDatas = (values) => {
			scope.days = values;

			if (size(values) > 0) {
				scope.current = toArray(values)[0];
			}

			$timeout(() => scope.fetchDatas(), scope.POLL_INTERVAL);
		};

		scope.fetchDatas();
	};

	return {
		scope: {},
		link: link,
		replace: true,
		templateUrl: tpl
	};
}];