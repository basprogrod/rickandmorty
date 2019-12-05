const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

module.exports = function override(config, env) {
  const srcPath = path.resolve(__dirname, `${paths.appSrc}/`)
  const updatedConfig = rewireAliases.aliasesOptions({
    '@': srcPath,
  })(config, env)

  return updatedConfig
}
