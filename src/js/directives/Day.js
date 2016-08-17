import angular from 'angular';
import Moment from 'moment';
import tpl from '../templates/day.view.html';
import { chain, map } from 'lodash';

const isToday = (day) => {
	return Moment().format('dddd') === day.format('dddd');
};

const getTempMinMax = (forecast) => {
	if (forecast.length > 0) {
		let { temp_max, temp_min } = forecast[0];
		return {
			temp_max,
			temp_min
		}
	}

	return {
		temp_max: '',
		temp_min: ''
	};
};

export default ['day', ($rootScope) => {
	const link = (scope, element, attrs) => {
		let day = Moment(attrs.date, 'YYYY-MM-DD');

		scope.isToday = isToday;
		scope.getTempMinMax = getTempMinMax;

		scope.dayLabel = day.format('dddd');
		scope.todayLabel = scope.isToday(day) ? 'Today' : '';

		let { temp_max, temp_min } = getTempMinMax(scope.forecast);
		scope.temp_max = temp_max;
		scope.temp_min = temp_min;

		scope.dayClassName = [
			'day',
			scope.todayLabel.toLowerCase()
		].join(' ');
	};

	return {
		scope: {
			forecast: '=forecast'
		},
		link: link,
		replace: true,
		templateUrl: tpl
	};
}];