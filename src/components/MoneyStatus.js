import Link from "next/link";
import Styles from "../styles/Welcome.module.css";
import Button from "./Button";
import TotalGivenOrTaken from "./TotalGivenOrTaken";

const MoneyStatus = ({ name, uid, onChange }) => {
  return (
    <div>
      <div className={Styles.gareebStatus}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            margin: 0,
            textAlign: "left",
            display: "inline",
          }}
        >
          {name.slice(0, 1).toUpperCase()}
          {name.slice(1)}
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            margin: 0,
            textAlign: "left",
            display: "inline",
            fontWeight: "500",
          }}
        >
          , your current Garrebe status{" "}
        </h2>
        <div className={Styles.takenOrGivenContatiner}>
          <TotalGivenOrTaken status="givenMoney" uid={uid} />
          <Link href="details/Profile">
            <Button type="text" value="Detailed hisab" />
          </Link>
          <TotalGivenOrTaken status="takenMoney" uid={uid} />
        </div>
      </div>
    </div>
  );
};

export default MoneyStatus;
