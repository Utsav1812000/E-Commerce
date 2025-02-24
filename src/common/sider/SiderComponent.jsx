import React from 'react'
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

export default function SiderComponent() {
    return (
        <Sider width={200}>
            <Menu mode="inline">
                <Menu.Item key="1">
                    <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/products">Products</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/orders">Orders</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
