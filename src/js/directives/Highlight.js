import angular from 'angular';
import tpl from '../templates/highlight.view.html';
import { kebabCase } from 'lodash';

export default ['highlight', ($rootScope) => {
	const link = (scope, element, attrs) => {
		scope.city = $rootScope.city;

		scope.$watch('current', (current) => {
			if (current.length > 0) {
				let now = current[0];
				let { temp, weather } = now;
				let { description } = weather[0];

				scope.temp = temp;
				scope.description = description;
				scope.weathericon = [
					'icon meteocons',
					kebabCase(description)
				].join(' ');
			}
		});
	};

	return {
		scope: {
			current: '=current'
		},
		link: link,
		replace: true,
		templateUrl: tpl
	};
}];