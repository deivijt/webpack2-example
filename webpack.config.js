
function buildConfig (env) {
  return require(`./webpack/webpack.${env}.config.js`)
}

module.exports = buildConfig
