import React from 'react'
import { Layout, Typography} from 'antd'
import UserProfileDropdown from '../profile/UserProfileDropdown';
const { Header } = Layout;
export default function HeaderComponent() {

    return (
        <Header style={{ background: "#002766", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
            <Typography.Title style={{ color: "white", margin: 0 }}>E-Commerce</Typography.Title>
            <UserProfileDropdown />
        </Header>
    )
}
