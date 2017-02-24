const path = require('path');
const webpack = require('webpack');

module.exports = {
	// Where to start building the dependency tree.
	entry: {
		app: path.join(__dirname, 'app/index.js'),
	},
	// Where to transpile the final JS file.
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js',
	},
	// Make it work with NW.js
	target: 'node-webkit',
	// Options for resolving module requests.
	resolve: {
		// Directories where to look for modules.
		modules: [
			'node_modules',
			path.resolve(__dirname, 'app'),
		],
	},
	module: {
		rules: [
			// Transpile JS/JSX.
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
				],
				exclude: /node_modules/
			},
			// Transpile CSS.
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?modules',
				],
			},
		],
	},
	plugins: [
		// Create readeable module names in the output.
		new webpack.NamedModulesPlugin(),
		// Enable HMR
		new webpack.HotModuleReplacementPlugin(),
	],
	// A SourceMap is added as DataUrl to the JavaScript file.
	devtool: 'inline-source-map',
};