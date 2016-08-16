import angular from 'angular';
import Moment from 'moment';
import tpl from '../templates/day.view.html';
import { chain, map } from 'lodash';

const isToday = (day) => {
	return Moment().format('dddd') === day.format('dddd');
};

const TimeList = (forecast) => {
	if (forecast.length > 0) {
		return map(forecast, (time, id) => {
			let { hour, temp, weather } = time;

			return <Time 
				hour={hour}
				temp={temp}
				weather={weather}
				index={id}
				key={id}
			/>;
		});
	}
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
	}
};

export default ['day', ($rootScope) => {
	const link = (scope, element, attrs) => {
		let day = Moment(attrs.date, 'YYYY-MM-DD');

		scope.isToday = isToday;
		scope.TimeList = TimeList;
		scope.getTempMinMax = getTempMinMax;

		scope.dayLabel = day.format('dddd');
		scope.todayLabel = scope.isToday(day) ? 'Today' : '';
		scope.forecast = attrs.forecast;
		scope.temp_max = 32;
		scope.temp_min = 20;

		//let { temp_max, temp_min } = getTempMinMax(forecast);
		scope.dayClassName = [
			'day',
			scope.todayLabel.toLowerCase()
		].join(' ');
	};

	return {
		scope: {},
		link: link,
		replace: true,
		templateUrl: tpl
	};
}];