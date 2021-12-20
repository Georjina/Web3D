const path = require('path');
function resolve(dir){
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath:'/dw-sass-3d',
  assetsDir        : 'static',
  css              : {
    sourceMap     : true,
    loaderOptions : {
      less    : {
        javascriptEnabled : true, // less 中允许使用 js
      },
      scss    : {
        // vue 组件中自动导入 sass 公共模块
        prependData : `
          @import "~@/styles/base/index";
        `,
      },
      postcss : {
        plugins : [
          // px转rem
          /*require('postcss-pxtorem')({
            rootValue         : 100,
            selectorBlackList : [/^\.van-/],
            propList          : ['*'],
          }),*/
],
},
},
},
chainWebpack     : (config) => {
    config.resolve.alias
        .set('@', resolve('src'))
        .set('@root', resolve(''));
  },
  configureWebpack : {
    // https://webpack.docschina.org/configuration/performance/
    performance : {
      hints             : false,
      // hints             : 'warning',
      maxEntrypointSize : 1024 ** 2 * 2,
      maxAssetSize      : 1024 ** 2 * 2,
      assetFilter(assetFilename){
        return assetFilename.endsWith('.js');
      },
    },
  },
  devServer        : {
    port : 20000,
    proxy : {
      '/api' : {
        target       : 'http://remote.mofang723.cn:2022/3d-module-platform/', //对应自己的接口
        changeOrigin : true,
        ws           : true,
        pathRewrite  : {
          '^/api' : ''
        }
      }
    }
  },
};
// webpack 配置文件地址：
// console.log(path.resolve(__dirname, './node_modules/@vue/cli-service/webpack.config.js'));
