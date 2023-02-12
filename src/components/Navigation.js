const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import kahta from "../../public/Khatabook.svg.png";
import Styles from "../styles/Navigation.module.css";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";

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
          <Image src={kahta} alt="Hisab" width={230} height={55} />
        </Link>
      </li>

      <li className={Styles.navigate}>hello</li>

      <li className={Styles.navigate}>Hisab</li>
      <li className={Styles.navigate}>
        <Link href={loginStatus ? "/profile" : "/auth/login"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiOutlineUser /> {loginStatus ? name : "login"}
          </div>
        </Link>
      </li>
    </ul>
  );
};
export default Navigation;
