const { useSelector } = require("react-redux");
const { default: LoginToGo } = require("./LoginToGo");
const { default: MoneyStatus } = require("./MoneyStatus");
import Styles from "../styles/Welcome.module.css";

import Strings from "@/Constants/Strings";

const WelcomeSection = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const Name = useSelector((state) => state.login.name);
  const uid = useSelector((state) => state.login.uid);
  let userName = "Guest";

  if (Name) {
    userName = Name.slice(0, 1).toUpperCase() + Name.slice(1);
  }

  return (
    <div className={Styles.alignWelcome}>
      <div className={Styles.backroundImage}>
        <div>
          <h1 className={Styles.logo}>{Strings.AppName}</h1>
        </div>
        <div className={Styles.welcomeContainer}>
          <h2 className={Styles.welcome}>
            Welcome,{" "}
            <h1 className={Styles.welcomeName}>
              {isLogin ? userName : "Guest"}
            </h1>
          </h2>
          <p className={Styles.description}> {Strings.Description} </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
