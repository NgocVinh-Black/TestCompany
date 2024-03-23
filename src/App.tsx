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
        <h1 style={{
          color: '#82CA9D'
        }} className='font-extrabold text-2xl'>DEMO HOTEL</h1>
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
      <Header style={{ padding: 0, background: '#FFFFFF', color: '#fff',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
            color: '#82CA9D',
          }}
        />
      </Header>
      <Content style={{ margin: '24px 16px', padding: '24 30', minHeight: '100vh', background: '#F4F4F5' }}>
        {renderTabContent()}
      </Content>
    </Layout>
  </Layout>
  );
};

export default App;
