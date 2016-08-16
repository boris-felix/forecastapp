var path = require('path');
var webpack = require('webpack');

module.exports = {
	devServer: {
		contentBase: "./public",
		noInfo: false
	},
	entry: {
		app: './src/js/app.js'
	},
	output: {
		filename: 'forecastapp.js',
		path: path.resolve('public/js'),
		publicPath: "/js/"
	},
	plugins: [
	],
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css?includePaths[]='+path.resolve(__dirname, './node_modules/')
			},
			{
				test: /\.js?$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				exclude: /(node_modules)/,
				loader: 'babel'
			},
			{ test: require.resolve('jquery'), loader: 'expose?$!expose?jQuery' },
			{ test: require.resolve('angular'), loader: 'imports?jquery' },
			{ test: /src.*\.js$/, loaders: ['ng-annotate'] },
			{
				test: /\.html$/,
				loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html'
			}
		]
	},
	devtool: 'source-map'
}
