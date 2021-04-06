const webpack = require("webpack");

module.exports = {
  devServer: {
    // 项目运行时候的端口号
    port: 8080,
    proxy: {
      "/api": {
        // target: 'http://192.168.31.149:8080/CIMforfinance/finance/',
        // target: 'http://47.102.133.17:8080/CIMforfinance/finance/',
        // target: "http://localhost:80/CIMforhistory/finance/",
        target: "http://192.168.5.49:6639/CIMforhistory/finance/",
        // target: 'http://192.168.31.153:8080/CIMforfinance/finance/',
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/2api": {
        // target: 'http://192.168.31.149:8080/CIMforfinance/finance/',
        // target: 'http://47.102.133.17:8080/CIMforfinance/finance/',
        target: "http://192.168.5.49:6639/geoserver/",
        // target: 'http://192.168.31.153:8080/CIMforfinance/finance/',
        changeOrigin: true,
        pathRewrite: {
          "^/2api": "",
        },
      },
    },
  },
  css: {
    sourceMap: true, // 开启 CSS source maps
  },
  publicPath: "./",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery",
      }),
    ],
    //关闭 webpack 的性能提示
    performance: {
      hints: false,
    },

    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
  },
};
