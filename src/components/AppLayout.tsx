
import { Layout, theme } from 'antd';
import SideBar from './SideBar';

const { Content, Footer} = Layout;

interface LayoutProps {
  children: React.ReactNode;
}


const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar/>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;