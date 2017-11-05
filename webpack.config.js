const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.min.js',
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '-'
    }
  }
}