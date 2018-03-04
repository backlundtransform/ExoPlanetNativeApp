module.exports = {
    getTransformModulePath() {
      return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
      return ['ts', 'tsx'];
    },  getBlacklistRE () {
      const blacklist = require('metro/src/blacklist')
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/])
  },
  }