var path = require('path');
var webpack = require('webpack');

module.exports = {
	devServer: {
		contentBase: "./public",
		noInfo: false
	},
	entry : {
		app: './src/js/app.js'
	},
	output : {
		filename: 'forecastapp.js',
		path: path.resolve('public/js'),
		publicPath: "/js/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'transform?envify'
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
