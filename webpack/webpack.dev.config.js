const { resolve } = require('path')
const webpack = require('webpack')

let PATHS = require('./paths')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    PATHS.hmr
    // the entry point of our app
  ],
  output: {
    filename: 'app.js',
    // the output bundle

    path: resolve(PATHS.dist),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },
  context: resolve(PATHS.src),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(PATHS.dist),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: PATHS.src,
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin()
    // prints more readable module names in the browser console on HMR updates
  ]
}
