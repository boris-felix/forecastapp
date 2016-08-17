import angular from 'angular';
import Highlight from './Highlight';
import ForecastList from './ForecastList';
import Day from './Day';
import Time from './Time';

export default angular.module('appDirectives', [])
	.directive(...Highlight)
	.directive(...ForecastList)
	.directive(...Day)
	.directive(...Time)
	.name;