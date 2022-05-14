import { routes } from './src/router';
import { defineConfig } from 'umi';
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const prodGzipList = ['js', 'css'];

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  history: {
    type: 'hash',
  },
  copy: [
    {
      from: './mock/config.json',
      to: 'config.json',
    },
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/umi-qiankun/' : '/',
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        // {
        //   name: 'vue3-cnode', // 唯一 id
        //   entry: '//localhost:8080', // html entry
        // },
      ],
    },
  },
  fastRefresh: {},
  chainWebpack(config) {
    if (process.env.UMI_ENV !== 'dev') {
      config.merge({
        optimization: {
          minimize: true,
          splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
              vendors: {
                name: 'vendors',
                chunks: 'all',
                test: /[\\/]node_modules[\\/](react|react-dom|events)[\\/]/,
                priority: -10,
              },
            },
          },
        },
      });
      config.plugin('compression-webpack-plugin').use(
        new CompressionWebpackPlugin({
          // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
          algorithm: 'gzip', // 指定生成gzip格式
          test: new RegExp('\\.(' + prodGzipList.join('|') + ')$'), // 匹配哪些格式文件需要压缩
          threshold: 10240, //对超过10k的数据进行压缩
          minRatio: 0.6, // 压缩比例，值为0 ~ 1
        }),
      );
    }
  },
  chunks: process.env.UMI_ENV !== 'dev' ? ['vendors', 'umi'] : ['umi'],
});
