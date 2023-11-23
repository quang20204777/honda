import logo from '../../../assets/images/hondaLogo.png';
import '../../../assets/styles/HeaderWareHouse.css'
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  PartitionOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  HistoryOutlined,
  ControlOutlined,
  SettingOutlined,
  UserOutlined,
  DashboardOutlined,
  ScanOutlined,
  ScheduleOutlined,
  ClusterOutlined,
  ForkOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Col, Avatar } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

function LayoutHonda() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu mode="vertical" defaultSelectedKeys={['2']}>
            <img src={logo} alt="logo-Honda" style={{width:'100%'}}></img>         
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{
                height: '100%',
                borderRight: 0,
            }}
              items={[
                {
                  key: "/dashboard",
                  icon: <DashboardOutlined />,
                  label: <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                },
                {
                  key: 'manage',
                  icon: <PartitionOutlined />,
                  label: 'Quản lý',
                  children: [{
                    key: '/takeout',
                    icon: <FileTextOutlined />,
                    label: <NavLink className="nav-link" to="/manage/takeout">Takeout</NavLink>,
                  },
                  {
                    key: '/scanner',
                    icon: <ScanOutlined />,
                    label: <NavLink className="nav-link" to="/manage/scanner">Máy quét</NavLink>,
                  },
                  {
                    key: '/speverhicle',
                    icon: <ShoppingCartOutlined />,
                    label: <NavLink className="nav-link" to="/manage/speverhicle">Xe chuyên dụng</NavLink>,
                  },
                  {
                    key: '/warehouse',
                    icon: <HomeOutlined />,
                    label: <NavLink className="nav-link" to="/manage/warehouse">Kho</NavLink>,
                  },
                  {
                    key: '/maker',
                    icon: <ScheduleOutlined />,
                    label: <NavLink className="nav-link" to="/manage/maker">Maker</NavLink>
                  },
                  {
                    key: '/history',
                    icon: <HistoryOutlined />,
                    label: <NavLink className="nav-link" to="/manage/history">Lịch sử</NavLink>,
                },
              ]
                },
                {
                  key: 'system',
                  icon: <ControlOutlined />,
                  label: 'Hệ thống',
                  children: [
                  {
                    key: '/verhicletype',
                    icon: <ForkOutlined />,
                    label: <NavLink className="nav-link" to="/system/verhicletype">Loại xe</NavLink>,
                  },
                  {
                    key: '/account',
                    icon: <UserOutlined />,
                    label: <NavLink className="nav-link" to="/system/account">Tài khoản</NavLink>,
                  },
                  {
                    key: '/decentral',
                    icon: <ClusterOutlined />,
                    label: <NavLink className="nav-link" to="/system/decentral">Phân quyền</NavLink>,
                  },
                  {
                    key: '/setting',
                    icon: <SettingOutlined />,
                    label: <NavLink className="nav-link" to="/system/setting">Cài đặt</NavLink>,
                  },
                  ],
                },
              ]}
            />
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
            <Row>
              <Col span={2}>
              <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
              />
              </Col>
              <Col className="gutter-row" span={16}></Col>
              <Col span={6}> 
              <div style={{marginRight:"20px"}}>
              <Avatar size="default" icon={<UserOutlined />}></Avatar> User Name
              </div>
              </Col>
            </Row>
              
              
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      );
}

export default LayoutHonda;




