import MenuItem from '@/components/MenuItem';
import { FunctionComponent, ReactNode } from 'react';
import './index.less';

interface LayoutProps {
  children: ReactNode;
  route: {
    routes: routerType[];
  };
}

interface routerType {
  path: string;
  name: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, route }) => {
  return (
    <>
      <div className="left-menu">
        <div className="left-menu-title">QIANKUN</div>
        <div className="left-menu-body">
          {route?.routes?.map((item, i) => {
            return (
              <MenuItem key={i} menuText={item.name} menuPath={item.path} />
            );
          })}
        </div>
      </div>
      <div className="rigth-qiankun-wrapper">{children}</div>
    </>
  );
};

export default Layout;
