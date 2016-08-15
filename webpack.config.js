var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry : {
		app: './src/js/app.js'
	},
	output : {
		filename : './public/js/forecastapp.js',
		publicPath: 'public'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'envify-loader'
			},
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, 'src'),
				],
				exclude: /(node_modules)/,
				loader: 'babel'
			}
		]
	},
	devtool: 'source-map'
}
