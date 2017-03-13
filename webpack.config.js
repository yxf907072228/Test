var fs = require('fs')
var fsExtra = require('fs-extra')
var path = require('path')
var webpack = require('webpack')
var CleanPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: {
   
    app:'./h5Demos/demo',
		vendor: ['babel-polyfill','whatwg-fetch', 'react', 'react-dom', 'redux',
			'react-redux', 'react-router', 'react-router-redux']
  },

  resolve: {
		alias: {
			app: path.join(__dirname, 'h5Demos'),
			libs: path.join(__dirname, 'libs')
		}
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new CleanPlugin([path.resolve(__dirname, './dist/static')]),
		// ignore dev config
		new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

		// set global vars
		new webpack.DefinePlugin({
			'process.env': {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify('production')
			}
		}),

		// optimizations
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
	  new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.bundle.js',
			minChunks: Infinity,
		})
  ],
  module: {
    loaders: [
			{ test: /\.css/, loader: 'style!css' },
			{ test: /\.less$/, loader: 'style!css!less' },
			{ test: /\.(js|jsx)$/, loaders: [ 'babel' ], exclude: /node_modules/, include: __dirname },
			{ test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
			{ test: /\.(png|jpg|gif)$/, loader: 'url?limit=10000' }
		]
  }
};
