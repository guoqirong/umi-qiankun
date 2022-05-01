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
        entry: 'http://localhost/vue3-cnode/',
        activeRule: '/#/microApp/react', // hash路由需配置
      },
    ],
    routes: [
      {
        past: '/vue3-cnode',
        microApp: 'vue3-cnode',
      },
      {
        past: '/umi-cnode',
        microApp: 'umi-cnode',
      },
    ],
  },
};
