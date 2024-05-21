import { Tabs } from "antd";
import SignIn from "../features/SignIn";
import SignUp from "../features/SignUp";

const items = [
  {
    key: "1",
    label: "Sign in",
    children: <SignIn />,
  },
  {
    key: "2",
    label: "Sign up",
    children: <SignUp />,
  },
];

function Login() {
  return (
    <Tabs
      centered={true}
      defaultActiveKey="1"
      items={items}
      style={{ maxWidth: 400, marginInline: "auto" }}
    />
  );
}

export default Login;
