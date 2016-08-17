import angular from 'angular';
import Directives from '../';
import Moment from 'moment';

describe('Directives', function() {
	beforeEach(angular.mock.module('appDirectives'));

	describe('ForecastList directive', function() {
		let $compile;
		let $rootScope;
		let $scope;
		let scope;
		let element;

		beforeEach(inject((_$compile_, _$rootScope_, WeatherService, _$q_) => {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();
			var defer = _$q_.defer();
			defer.resolve({
				'2016-01-01': {},
				'2016-01-02': {},
				'2016-01-03': {}
			});
			spyOn(WeatherService, 'fetch').and.returnValue(defer.promise);
		}));

		it('should renders three Day component', () => {
			element = $compile('<forecast-list></forecast-list>')($scope);
			$scope.$digest();
			expect(angular.element(element).find('.day').length).toEqual(3);
		});
	});

	describe('Day directive', function() {
		let $compile;
		let $rootScope;
		let $scope;
		let scope;
		let element;

		beforeEach(inject((_$compile_, _$rootScope_) => {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();

			$scope.forecast = [
				{
					hour: '00:00',
					temp: 30,
					temp_max: 36,
					temp_min: 12,
					weather: [
						{
							description: 'foo',
							icon: 'bar',
							id: 123,
							main: 'fuu'
						}
					]
				},
				{
					hour: '01:00',
					temp: 31,
					temp_max: 34,
					temp_min: 17,
					weather: [
						{
							description: 'foo2',
							icon: 'bar2',
							id: 124,
							main: 'fuu2'
						}
					]
				}
			];
		}));

		it('should not show today label', () => {
			element = $compile('<day forecast="forecast" date="2016-01-01"></day>')($scope);
			$scope.$digest();
			scope = element.isolateScope();
			expect(
				angular.element(element).find('.header .day--detail .today--label').text()
			).not.toEqual('Today');
			expect(scope.todayLabel).not.toEqual('Today');
		});

		it('should show today label', () => {
			element = $compile('<day forecast="forecast" date="'+ Moment().format('YYYY-MM-DD')+'"></day>')($scope);
			$scope.$digest();
			scope = element.isolateScope();
			expect(
				angular.element(element).find('.header .day--detail .today--label').text()
			).toEqual('Today');
			expect(scope.todayLabel).toEqual('Today');
		});

		describe('', () => {
			let wrapper;

			beforeEach(() => {
				element = $compile('<day forecast="forecast" date="2016-01-01"></day>')($scope);
				$scope.$digest();
				scope = element.isolateScope();
				wrapper = angular.element(element);
			});

			it('should show the max temp of the day', () => {
				expect(wrapper.find('.header .temp--detail .max--temp').text()).toEqual('Max: 36°');
			});

			it('should show the min temp of the day', () => {
				expect(wrapper.find('.header .temp--detail .min--temp').text()).toEqual('Min: 12°');
			});

			it('should renders multiples Time component', () => {
				expect(wrapper.find('.time').length).toEqual(2);
			});
		});
	});

	describe('HighLight directive', () => {
		let $compile;
		let $rootScope;
		let $scope;
		let scope;
		let element;
		let wrapper;

		beforeEach(inject((_$compile_, _$rootScope_) => {
			$compile = _$compile_;
			$rootScope = _$rootScope_;
			$scope = $rootScope.$new();

			$rootScope.city = 'Biarritz';
			$scope.current = [
				{
					hour: '00:00',
					temp: 20,
					temp_max: 36,
					temp_min: 12,
					weather: [
						{
							description: 'Foo',
							icon: 'bar',
							id: 123,
							main: 'fuu'
						}
					]
				}
			];

			element = $compile('<highlight current="current"></highlight>')($scope);
			$scope.$digest();
			wrapper = angular.element(element);
		}));

		it('should show the city name', () => {
			expect(wrapper.find('.city').text()).toEqual('Biarritz');
		});

		it('should show the temperature', () => {
			expect(wrapper.find('.temperature').text()).toEqual('20°');
		});

		it('should show the weather description', () => {
			expect(wrapper.find('.description span').text()).toEqual('Foo');
		});

		it('should show a weather icon related to the description', () => {
			scope = element.isolateScope();
			scope.current = [
				{
					hour: '00:00',
					temp: 30,
					temp_max: 36,
					temp_min: 12,
					weather: [
						{
							description: 'Light rain',
							icon: 'bar',
							id: 123,
							main: 'fuu'
						}
					]
				}
			];

			scope.$digest();

			expect(wrapper.find('.description .icon').hasClass('light-rain')).toEqual(true);
		});
	});
});