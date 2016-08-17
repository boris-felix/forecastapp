import angular from 'angular';
import tpl from '../templates/time.view.html';
import Moment from 'moment';
import { kebabCase } from 'lodash';

export default ['time', ($rootScope) => {
	const link = (scope, element, attrs) => {
		let { description } = scope.weather[0];
		scope.time = Moment(scope.hour, 'HH:mm').format('HH:mm');

		scope.weatherIcon = [
			'icon meteocons',
			kebabCase(description)
		].join(' ');

		scope.timeClassName = [
			'time col-md-1 col-sm-2 col-xs-2',
			(scope.id > 5 ? 'hidden-xs hidden-sm' : '')
		].join(' ');
	};

	return {
		scope: {
			weather: '=',
			hour: '=',
			temp: '='
		},
		link: link,
		replace: true,
		templateUrl: tpl
	};
}];