import React from 'react'
import { Layout, Typography, Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
const { Header } = Layout;
export default function HeaderComponent() {

    const menuItems = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>View Profile</Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>Logout</Menu.Item>
        </Menu>
    );

    return (
        <Header style={{ background: "#002766", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
            <Typography.Title style={{ color: "white", margin: 0 }}>E-Commerce</Typography.Title>
            <Dropdown overlay={menuItems} trigger={["click"]}>
                <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
            </Dropdown>
        </Header>
    )
}
