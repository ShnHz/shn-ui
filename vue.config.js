const NODE_ENV = 'development' // 开发环境 打包doc
// const NODE_ENV = 'lib' // 组件库 上传npm

const components = require('./build/compontents.json');

const baseConfig = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    extract: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "public/css/shn-vue-ui.scss";`
      }
    },
  }
}

const devConfig = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },

  publicPath: './',
  outputDir: 'docs',
  ...baseConfig
}

const buildConfig = {
  configureWebpack: {
    entry: components,
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
  },
  outputDir: 'lib',
  productionSourceMap: false,
  ...baseConfig
}

module.exports = NODE_ENV === 'development' ? devConfig : buildConfig;