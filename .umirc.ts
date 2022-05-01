import { routes } from './src/router';
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  history: {
    type: 'hash',
  },
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
});
