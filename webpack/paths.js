const { join } = require('path')

module.exports = {
  entry: join(__dirname, '../src/index.jsx'),
  hmr: join(__dirname, '../src/hmr.jsx'),
  dist: join(__dirname, '../dist'),
  src: join(__dirname, '../src'),
  styles: join(__dirname, '../src/styles.scss')
}
