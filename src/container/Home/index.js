import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import { Link, Route } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default ({children}) => {
    console.log(children,'children=============')
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                    <SubMenu key="sub1" title="赛题管理">
                        <Menu.Item key="1-1"><Link to={'/home/question/Pd'}>Pd</Link></Menu.Item>
                        <Menu.Item key="1-2"><Link to={'/home/question/User'}>User</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="试卷管理">
                        <Menu.Item key="2-1"><Link to={'/home/papers/Pd'}>Pd</Link></Menu.Item>
                        <Menu.Item key="2-2"><Link to={'/home/papers/User'}>User</Link></Menu.Item>
                    </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
