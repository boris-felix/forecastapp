import angular from 'angular';
import tpl from '../templates/forecast-list.view.html';
import WeatherService from '../services/weather';

export default ['forecastList', ($rootScope) => {
	const link = (scope, element, attrs) => {
		WeatherService.fetch($rootScope.city).then((values) => {
			$rootScope.$apply(() => {
				scope.days = values;
			});
		});
	};

	return {
		scope: {},
		link: link,
		replace: true,
		templateUrl: tpl
	};
}];