const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PATHS = require('./paths')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: {
    app: PATHS.entry,
    styles: PATHS.styles,
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    path: resolve(PATHS.dist)
  },
  context: resolve(PATHS.src),

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: resolve(PATHS.dist),
    // match the output path
    noInfo: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
        include: PATHS.src,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new UglifyJSPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
