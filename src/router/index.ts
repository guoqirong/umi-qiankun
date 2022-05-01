export const microAppRouters = [];

export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [{ path: '/', component: '@/pages/index' }],
  },
];
