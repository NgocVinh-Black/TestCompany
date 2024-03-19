import React, { useState } from 'react';
import ActualData from './components/ActualData';
import ReservationForecast from './components/ReservationForecast';
import PeriodDetail from './components/PeriodDetail';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  HomeOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('ActualData');

  const handleMenuClick = (key: string) => {
    setActiveTab(key);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'ActualData':
        return <ActualData />;
      case 'ReservationForecast':
        return <ReservationForecast />;
      case 'PeriodDetail':
        return <PeriodDetail />;
      default:
        return null;
    }
  };

  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {/* <div className="demo-logo-vertical" /> */}
      <div className='text-center mt-2'>
        <h1 className='text-white font-extrabold text-2xl'>DEMO HOTEL</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        onClick={({ key }) => handleMenuClick(key)}
      >
        <Menu.Item key="ActualData" icon={<HomeOutlined />}>
          Actual Data
        </Menu.Item>
        <Menu.Item key="ReservationForecast" icon={<BarChartOutlined />}>
          Reservation Forecast
        </Menu.Item>
        <Menu.Item key="PeriodDetail" icon={<TableOutlined />}>
          Period Detail
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: '#001529', color: '#fff' }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: '#fff',
          }}
        />
      </Header>
      <Content style={{ margin: '24px 16px', padding: 24, minHeight: '100vh' }}>
        {renderTabContent()}
      </Content>
    </Layout>
  </Layout>
  );
};

export default App;
