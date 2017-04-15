var path = require('path')
var webpack = require('webpack')


module.exports = {
  devtool: 'eval',
  entry: {
   
    app:['webpack-hot-middleware/client','./testDemo/index'],
    vendor: ['babel-polyfill','whatwg-fetch', 'react', 'react-dom', 'redux',
			'react-redux', 'react-router', 'react-router-redux']
  },

  resolve: {
		alias: {
			app: path.join(__dirname, 'testDemo'),
      libs: path.join(__dirname, 'libs')
			//libs: path.join(__dirname, 'libs')
		}
	},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    sourceMapFilename: '[file].map'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
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
