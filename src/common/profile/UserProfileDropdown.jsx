import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined, LockOutlined, LogoutOutlined } from "@ant-design/icons";

const UserProfileDropdown = ({ onViewProfile, onChangePassword, onLogout }) => {

  const handleViewProfile = () => {
    alert("View Profile Clicked");
    // Navigate to Profile Page
  };

  const handleChangePassword = () => {
    alert("Change Password Clicked");
    // Open Change Password Modal
  };

  const handleLogout = () => {
    alert("Logout Clicked");
    // Perform Logout Logic
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />} onClick={handleViewProfile}>
        View Profile
      </Menu.Item>
      <Menu.Item key="changePassword" icon={<LockOutlined />} onClick={handleChangePassword}>
        Change Password
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar
        size="large"
        icon={<UserOutlined />}
        style={{ cursor: "pointer", backgroundColor: "#1890ff" }}
      />
    </Dropdown>
  );
};

export default UserProfileDropdown;
