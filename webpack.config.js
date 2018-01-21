
var HTMLWebpackPlugin = require('webpack-html-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '/app/js/init.js'),
		path.join(__dirname, '/app/css/style.scss')
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				exclude: '/app/',
				loader: ExtractTextPlugin.extract(['css-loader'])
			},
			{
				test: /\.scss$/,
				exclude: '/node_modules/',
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
			},
			{
				test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg|ico)$/,
				exclude: '/node_modules/',
				loader: 'file-loader',
				options: {
					limit: 8192
				}
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html-loader'
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	devServer:{
		contentBase: '/build'
	},
	output: {
		filename: 'compiled.js',
		publicPath: '/',
		path: path.join(__dirname, '/app/build')
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(__dirname, '/app/index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin("[name].css")
	]
};