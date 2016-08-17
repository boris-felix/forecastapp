// Karma configuration
// Generated on Sun Oct 20 2013 07:28:56 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
	// base path, that will be used to resolve files and exclude
	basePath: '.',

	// frameworks to use
	frameworks: ['jasmine'],

	plugins: [
		'karma-spec-reporter',
		'karma-webpack',
		'karma-jasmine',
		'karma-phantomjs-launcher'
	],

	// list of files / patterns to load in the browser
	files: [
		// Important : the order matter
		// See : https://docs.angularjs.org/api/ng/function/angular.element
		'./node_modules/jquery/dist/jquery.js',
		'./node_modules/angular/angular.js',
		'./node_modules/angular-mocks/angular-mocks.js',
		'./node_modules/phantomjs-polyfill/bind-polyfill.js',
		{pattern: './src/**/__tests__/*.js', included: true},
	],

	// list of files to exclude
	exclude: [
		//'js/main.js'
	],

	preprocessors: {
		'./src/**/__tests__/*.js': ['webpack']
	},

	// test results reporter to use
	// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
	reporters: ['spec'],

	// web server port
	port: 9876,

	// enable / disable colors in the output (reporters and logs)
	colors: true,

	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_DISABLE,

	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,

	// Start these browsers, currently available:
	// - Chrome
	// - ChromeCanary
	// - Firefox
	// - Opera
	// - Safari (only Mac)
	// - PhantomJS
	// - IE (only Windows)
	browsers: ['PhantomJS'],

	// If browser does not capture in given timeout [ms], kill it
	captureTimeout: 60000,

	// Continuous Integration mode
	// if true, it capture browsers, run tests and exit
	singleRun: false,

	webpack: require('./webpack.config.js'),

	webpackMiddleware: {
		// webpack-dev-middleware configuration
		// i. e.
		noInfo: true
	}
  });
};