import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { registerUserAPI } from "../services/api_service";
import { useNavigate } from "react-router-dom"; // Uncommented useNavigate

const registerPage = () => {
  const navigate = useNavigate(); // useNavigate inside component

  const onFinish = async (values) => {
    const res = await registerUserAPI(
      values.fullName,
      values.password,
      values.email,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "Register User",
        description: "Registered User Successfully!",
      });
      navigate("/login"); // Navigate after success
    } else {
      notification.error({
        message: "Failed To Register User!",
        description: JSON.stringify(res.message),
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "24px", // Adjust font size as needed
          fontWeight: "bold", // Make it bold
          textAlign: "center", // Center the title
          color: "#1890ff", // Change the color to match your theme
        }}
      >
        REGISTER
      </h2>

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Wrong format email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              pattern: new RegExp("^.{6,}$"),
              message: "Password must be at least 6 characters",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          label="Phone No"
          name="phone"
          rules={[
            {
              required: true,
              pattern: new RegExp("^[0-9]+$"),
              message: "Wrong format phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default registerPage;
