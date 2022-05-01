export const routes = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [{ path: '/', component: '@/pages/index', name: 'index' }],
  },
];
