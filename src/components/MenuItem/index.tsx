import { FunctionComponent } from 'react';
import { useHistory } from 'umi';
import './index.less';

interface MenuItemProps {
  menuText: string;
  menuPath: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ menuText, menuPath }) => {
  const history = useHistory();

  const getSelected = (path: string) => {
    if (path === '/') {
      return history.location.pathname === path;
    }
    return history.location.pathname.includes(path);
  };

  return (
    <div
      className={`menu-item${getSelected(menuPath) ? ' is-selected' : ''}`}
      onClick={() => {
        history.push(menuPath);
      }}
    >
      {menuText}
    </div>
  );
};

export default MenuItem;
