import { Link, NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  UserOutlined,
  BookOutlined,
  HomeOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  AliwangwangOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
//import './header.css'
const Header = () => {
  const [current, setCurrent] = useState("home");
  const { user } = useContext(AuthContext);
  //console.log(`check`,user)
  const onClick = (e) => {
    //console.log("click ", e);
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
    ...(!user.id
      ? [
          {
            label: <Link to={`/register`}>Register</Link>,
            key: "register",
            icon: <UserAddOutlined />,
          },
        ]
      : []),

    ...(!user.id
      ? [
          {
            label: <Link to={`/login`}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),

    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [
              {
                label: "Logout",
                key: "logout",
              },
            ],
          },
        ]
      : []),
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
