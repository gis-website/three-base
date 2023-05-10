const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置sass（css编译工具）
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/styles/special.scss";'
      }
    }
  }
})
