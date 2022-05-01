import MicroAppLoader from '@/.umi/plugin-qiankun/MicroAppLoader';
import useEventBus from '@/utils/event-bus';
import { FunctionComponent, useState } from 'react';
import { MicroApp } from 'umi';

interface MicroAppLayoutProps {
  route: { [key: string]: any };
}

const MicroAppLayout: FunctionComponent<MicroAppLayoutProps> = (props) => {
  const { route } = props;
  const [loading, setLoading] = useState(true);
  const [event] = useEventBus();
  event.on('qiankun-child-loading', (loading) => setLoading(loading));

  return (
    <>
      {loading ? <MicroAppLoader loading={loading} /> : ''}
      <MicroApp name={route.microApp} />
    </>
  );
};

export default MicroAppLayout;
