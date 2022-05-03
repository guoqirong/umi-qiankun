export default {
  '/config': {
    apps: [
      {
        name: 'vue3-cnode',
        entry: 'https://guoqirong.github.io/vue3-cnode/',
        activeRule: '/#/vue3-cnode', // hash路由需配置
      },
      {
        name: 'umi-cnode',
        entry: 'https://guoqirong.github.io/umi-cnode/',
        activeRule: '/#/umi-cnode', // hash路由需配置
      },
      {
        name: 'react-cnode',
        entry: 'https://guoqirong.github.io/react-cnode/',
        activeRule: '/#/react-cnode', // hash路由需配置
      },
      {
        name: 'vue2-cnode',
        entry: 'https://guoqirong.github.io/vue2-cnode/',
        activeRule: '/#/vue2-cnode', // hash路由需配置
      },
    ],
    routes: [
      {
        path: '/vue3-cnode',
        microApp: 'vue3-cnode',
      },
      {
        path: '/umi-cnode',
        microApp: 'umi-cnode',
      },
      {
        path: '/react-cnode',
        microApp: 'react-cnode',
      },
      {
        path: '/vue2-cnode',
        microApp: 'vue2-cnode',
      },
    ],
  },
};
