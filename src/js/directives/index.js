import angular from 'angular';
import Highlight from './Highlight';
import ForecastList from './ForecastList';
import Day from './Day';
import Time from './Time';
import WeatherService from '../services/weather';

export default angular.module('appDirectives', ['WeatherService'])
	.directive(...Highlight)
	.directive(...ForecastList)
	.directive(...Day)
	.directive(...Time)
	.name;