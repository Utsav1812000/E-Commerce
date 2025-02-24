// import logo from './logo.svg';
import './App.css';
// import Dashboard from './components/dashboard/Dashboard';
import { Layout } from 'antd';
import HeaderComponent from './common/header/HeaderComponent';
import SiderComponent from './common/sider/SiderComponent';
import MyRoutes from './common/router/MyRoutes';
const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderComponent />
      <Layout>
        <SiderComponent />
        {/* <Dashboard /> */}
        <Content style={{ padding: 20 }}>
          <MyRoutes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
