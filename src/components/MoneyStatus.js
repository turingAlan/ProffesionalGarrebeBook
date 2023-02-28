import Link from "next/link";
import Styles from "../styles/Welcome.module.css";
import Button from "./Button";
import TotalGivenOrTaken from "./TotalGivenOrTaken";

const MoneyStatus = ({ name, uid, onChange }) => {
  return (
    <div>
      <div className={Styles.gareebStatus}>
        <h1 style={{ textAlign: "center" }}>
          {name.slice(0, 1).toUpperCase()}
          {name.slice(1)},<span> your current Garrebe status </span>
        </h1>
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
