module.exports = {
  css: {
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 100
          })
        ]
      }
    }
  }
};
