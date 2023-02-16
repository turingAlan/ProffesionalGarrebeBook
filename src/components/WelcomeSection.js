const { useSelector } = require("react-redux");
const { default: LoginToGo } = require("./LoginToGo");
const { default: MoneyStatus } = require("./MoneyStatus");
import Styles from "../styles/Welcome.module.css";

const WelcomeSection = ({ onChange }) => {
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
          <h1 className={Styles.logo}>Gareebe bookk</h1>
        </div>
        <div className={Styles.welcomeContainer}>
          <h2 className={Styles.welcome}>
            Welcome,{" "}
            <span className={Styles.welcomeName}>
              {isLogin ? userName : "Guest"}
            </span>
          </h2>
          <p className={Styles.description}>
            {" "}
            to garreb book we cannot make you rich but we definetly make you
            feel chor like by keeping a record about how many people you have
            taken money from and not given to them{" "}
          </p>
        </div>
      </div>
      {isLogin ? <MoneyStatus name={Name} uid={uid} /> : <LoginToGo />}
    </div>
  );
};

export default WelcomeSection;
