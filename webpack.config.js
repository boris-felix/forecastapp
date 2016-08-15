var path = require('path');

module.exports = {
	devServer: {
		contentBase: "./public",
		noInfo: false
	},
	entry : {
		app: './src/js/app.js'
	},
	output : {
		filename : './public/js/app.js',
		publicPath: 'public'
	},
	module: {
		loaders: [
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
