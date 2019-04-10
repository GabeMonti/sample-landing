
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/variables.scss";`
      }
    }
  },
  configureWebpack:{
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  },
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: (config) => {
    // A, remove the plugin
    config.plugins.delete('prefetch')
  },

  lintOnSave: undefined
}
