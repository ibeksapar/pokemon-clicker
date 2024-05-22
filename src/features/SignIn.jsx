import { Button, Form, Input } from "antd";
import styles from "../pages/Login.module.css";

const onFinish = async (values) => {
  const res = await fetch("http://localhost:9999/user/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      username: values.login,
      password: values.password,
    },
  });

  const data = await res.json();
  console.log("Success login:", data);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function SignIn() {
  return (
    <Form
      layout="vertical"
      labelAlign="left"
      name="basic"
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
        <Input placeholder="Input login" className={styles.input} />
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
        <Input.Password placeholder="Input password" className={styles.input} />
      </Form.Item>

      <Form.Item className={styles.formItem}>
        <Button type="primary" htmlType="submit" className={styles.btn}>
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignIn;
