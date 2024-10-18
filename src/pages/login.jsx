import React, { useState, useContext } from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginUserAPI } from "../services/api_service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/context/auth.context";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const res = await loginUserAPI(values.email, values.password);
    if (res.data) {
      notification.success({
        message: "Login User",
        description: "Login User Successfully!",
      });
      localStorage.setItem(`access_token`, res.data.access_token);
      setUser(res.data.user);
      navigate("/");
    } else {
      notification.error({
        message: "Failed To Register User!",
        description: JSON.stringify(res.message),
      });
    }
    setLoading(false);
    //console.log("Received values of form: ", values);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Added flex direction column
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "24px", // Adjust font size as needed
            fontWeight: "bold", // Make it bold
            textAlign: "center", // Center the title
            color: "#1890ff", // Change the color to match your theme
          }}
        >
          LOGIN
        </h2>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Wrong format email",
            },
            {
              required: true,
              message: "Please input your email !",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-back-homepage" href="/">
            Back to home
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginPage;
