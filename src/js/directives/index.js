import angular from 'angular';
import ForecastList from './ForecastList';
import Day from './Day';

export default angular.module('appDirectives', [])
	.directive(...ForecastList)
	.directive(...Day)
	.name;