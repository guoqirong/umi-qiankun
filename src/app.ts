import { dynamic } from 'umi';
import useEventBus from './utils/eventBus';

interface extraRoutesType {
  path: string;
  microApp: string;
}

let extraRoutes: extraRoutesType[] = [];
const [event] = useEventBus();

export const qiankun = fetch(
  process.env.NODE_ENV === 'production'
    ? '/umi-qiankun/config.json'
    : 'config.json',
)
  .then((res) => {
    return res.json();
  })
  .then(({ apps }) => {
    return Promise.resolve({
      // 注册子应用信息
      apps: apps.map((item: any) => {
        item.props = {
          userPro: 'umi-qiankun',
          entry: item.entry,
        };
        return item;
      }),
      // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
      lifeCycles: {
        // beforeLoad: (props: any) => {
        //   console.log(props);
        // },
        // beforeMount: (props: any) => {
        //   console.log(props);
        // },
        afterMount: () => {
          event.emit('qiankun-child-loading', false);
          // console.log(props);props: any
        },
        // beforeUnmount: (props: any) => {
        //   console.log(props);
        // },
        // afterUnmount: (props: any) => {
        //   console.log(props);
        // },
      },
      // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    });
  });

export function patchRoutes({ routes }: { routes: any }) {
  extraRoutes.forEach((element) => {
    routes[0].routes.push({
      name: element.microApp,
      // icon: 'smile',
      path: element.path,
      microApp: element.microApp,
      component: dynamic({
        loader: () => import('@/layouts/MicroAppLayout'),
      }),
    });
  });
}

export async function render(oldRender: () => void) {
  fetch(
    process.env.NODE_ENV === 'production'
      ? '/umi-qiankun/config.json'
      : 'config.json',
  )
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      extraRoutes = resJson.routes;
      oldRender();
    });
}
