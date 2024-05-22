import { Tabs, Divider } from "antd";
import SignIn from "../features/SignIn";
import SignUp from "../features/SignUp";
import styles from "./Login.module.css";

const items = [
  {
    key: "1",
    label: "Sign up",
    children: <SignUp />,
  },
  {
    key: "2",
    label: "Sign in",
    children: <SignIn />,
  },
];

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src="./pokemon.svg" />
        <Divider
          className={styles.divider}
          type="vertical"
          orientation="center"
        />
        <img src="./clicker.svg" />
      </div>
      <Tabs
        className={styles.tabs}
        centered={true}
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
}

export default Login;
