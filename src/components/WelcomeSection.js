const { useSelector } = require("react-redux");
const { default: LoginToGo } = require("./LoginToGo");
const { default: MoneyStatus } = require("./MoneyStatus");
import Styles from "../styles/Welcome.module.css";

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
          <h1 className={Styles.logo}>GARREBE BOKK</h1>
        </div>
        <div className={Styles.welcomeContainer}>
          <h2 className={Styles.welcome}>
            Welcome,{" "}
            <h1 className={Styles.welcomeName}>
              {isLogin ? userName : "Guest"}
            </h1>
          </h2>
          <p className={Styles.description}>
            {" "}
            here at garreb book we cannot make you rich but we definetly make
            you feel chor like by keeping a record about how many people you
            have taken money from and not given to them{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
