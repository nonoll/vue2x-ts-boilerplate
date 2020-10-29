/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  configureWebpack: {
    // @see https://webpack.js.org/configuration/resolve/#resolvealias
    // resolve: {
    //   alias: {
    //     '@': path.join(__dirname, 'src/')
    //   }
    // },
    plugins: [
      // @see https://www.npmjs.com/package/case-sensitive-paths-webpack-plugin
      new CaseSensitivePathsPlugin()
    ]
  },
  css: {
    // @see https://cli.vuejs.org/config/#css-loaderoptions
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/base/_variables.scss";
          @import "@/styles/base/mixins/_mixins.scss";
        `
      }
    }
  },
  transpileDependencies: ['vuex-module-decorators']
};
