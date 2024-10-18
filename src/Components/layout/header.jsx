import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
//import './header.css'
const Header = () => {
  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={`/`}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={`/users`}>Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={`/books`}>Products</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    {
      label: <Link to={`/register`}>Register</Link>,
      key: "register",
      icon: <UserAddOutlined />,
    },
    {
      label: <Link to={`/login`}>Login</Link>,
      key: "login",
      icon: <LoginOutlined />,
    },
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
