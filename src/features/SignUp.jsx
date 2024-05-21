import { Button, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function SignUp() {
  return (
    <Form
      layout="vertical"
      labelAlign="left"
      name="basic"
      style={{
        padding: 24,
        borderRadius: 16,
        backgroundColor: "#FFF",
        boxShadow: "0px 0px 16px 0px rgba(58, 58, 58, 0.1)",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="Login"
        rules={[
          {
            required: true,
            message: "Please input your login!",
          },
        ]}
      >
        <Input placeholder="Input login" style={{ borderRadius: 2 }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password
          placeholder="Input password"
          style={{ borderRadius: 2 }}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Password confirmation"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Input password again"
          style={{ borderRadius: 2 }}
        />
      </Form.Item>

      <Form.Item
        style={{
          marginBottom: 0,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", backgroundColor: "#365FAC", borderRadius: 2 }}
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignUp;
