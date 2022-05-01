import { FunctionComponent, ReactNode } from 'react';
import './index.less';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="left-menu">
        <div className="left-menu-title">QIANKUN</div>
        <div className="left-menu-body"></div>
      </div>
      <div className="rigth-qiankun-wrapper">{children}</div>
    </>
  );
};

export default Layout;
