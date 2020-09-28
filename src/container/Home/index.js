import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import menus from 'constant/menus';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';
import './index';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const cls = 'competition-home-container';

export default withRouter((props) => {

    const [ collapsed, setCollapsed ] = useState(false);

    const selectedMenuItem = props.location.pathname;

    const defaultOpenKeys = selectedMenuItem.split('/').slice(2,-1);

    const handleSubMenu = (data) => {
        return (<SubMenu key={data.key} title={data.menuName}>
            {
                handleMenuItem(data.childs)
            }
        </SubMenu>)
    };
    const handleMenuItem = (data) => {
        return data.map((item) => {
            if (item.childs && item.childs.length > 0) {
                return handleSubMenu(item)
            } else {
                return (<Menu.Item key={item.url}>
                    <Link to={`${item.url}`}>{item.menuName}</Link>
                </Menu.Item>)
            }
        })
    }
    const handleMenu = () => {
        return (
            <Menu
                mode="inline" 
                defaultOpenKeys={defaultOpenKeys.length>0?defaultOpenKeys:['papers']}
                selectedKeys={[selectedMenuItem]}
                style={{ height: '100%', borderRight: 0 }}
            >
                {handleMenuItem(menus)}
            </Menu>
        )
    }

    return (
        <Layout className={cls}>
            <Header className="header">
                <div className="logo" />
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: `${cls}-collapsTrigger`,
                    style: { color:'#fff', fontSize:'20px' },
                    onClick: ()=>setCollapsed(!collapsed),
                })}
            </Header>
            <Layout>
                <Sider 
                    width={200} 
                    className="site-layout-background"
                    trigger={null} 
                    collapsible 
                    collapsed={collapsed}
                >
                    { handleMenu(menus) }
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} itemRender={item=>item.menuName} routes={menus} />
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
})
