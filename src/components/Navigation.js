const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import Styles from "../styles/Navigation.module.css";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const Navigation = (props) => {
  const loginStatus = useSelector((state) => state.login.isLogin);
  let name = useSelector((state) => state.login.name);
  if (!name) {
    name = "User";
  }
  const router = useRouter();
  return (
    <ul className={Styles.list}>
      <li className={Styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </li>

      <li className={Styles.navigate}>
        <ThemeToggle />
      </li>

      <li className={Styles.navigate}>Hisab</li>
      <li className={Styles.navigate}>
        <Link href={loginStatus ? "/profile" : "/auth/login"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {loginStatus ? name : <AiOutlineUser />}
          </div>
        </Link>
      </li>
    </ul>
  );
};
export default Navigation;
