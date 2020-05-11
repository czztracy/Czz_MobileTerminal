const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionPlugin = require("compression-webpack-plugin");
// // 引入gzip压缩插件
// const CompressionPlugin = require("compression-webpack-plugin");
// const SkeletonWebpackPlugin = require("vue-skeleton-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 默认为'/'
  publicPath: process.env.BASE_URL,
  // 将构建好的文件输出到哪里，本司要求
  outputDir: "dist",
  // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 对vue-cli内部的 webpack 配置进行更细粒度的修改
    config.optimization.minimizer("terser").tap(args => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });

    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 可视化分析
      config.plugins.push(new BundleAnalyzerPlugin());
      // gzip压缩配置 在压缩较大文件时往往可实现高达 70-90% 的压缩率，对已经压缩过的资源（如：图片）进行 gzip 压缩处理，效果很不好。
      config.plugins.push(
        new CompressionPlugin({
          // 匹配文件名
          test: /\.js$|\.html$|\.css/,
          // 对超过10kb的数据进行压缩
          threshold: 10240,
          // 是否删除原文件
          deleteOriginalAssets: false
        })
      );
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 如果你想去掉文件名中的 .module
    requireModuleExtension: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 100
          })
        ]
      }
      // sass: {
      //   prependData:
      //     '@import "style/_mixin.scss";@import "style/_variables.scss";' // 全局引入
      // }
    }
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: "127.0.0.1",
    port: 8088, // 服务端口
    https: false,
    hotOnly: false,
    // 设置代理，用来解决本地开发跨域问题，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "https://www.fastmock.site",
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: ""
        }
      }
    }
  }
};
