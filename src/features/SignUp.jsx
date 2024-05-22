import { Button, Form, Input } from "antd";
import styles from "../pages/Login.module.css";

const onFinish = async (values) => {
  try {
    const res = await fetch("http://localhost:9999/user/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.login,
        password: values.password,
      }),
    });

    const data = await res.json();
    console.log("Registered Success:", data);
  } catch (err) {
    console.error(err.message);
  }
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
          className={styles.input}
        />
      </Form.Item>

      <Form.Item className={styles.formItem}>
        <Button type="primary" htmlType="submit" className={styles.btn}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignUp;
