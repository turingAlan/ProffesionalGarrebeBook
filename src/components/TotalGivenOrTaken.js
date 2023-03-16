import { Prosto_One } from "@next/font/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Styles from "../styles/Welcome.module.css";

const { getData } = require("@/utils/sampleFirebase");

const TotalGivenOrTaken = (props) => {
  const [money, setMoney] = useState();
  const clicked = useSelector((state) => state.login.clicked);

  useEffect(() => {
    const redeclare = async () => {
      await getData(props.status, props.uid).then((value) => setMoney(value));
    };
    redeclare();
  }, [clicked]);

  return (
    <div className={Styles.takenOrGivenBox}>
      <h2 className={Styles.takenGivenHeading}>
        {props.status === "givenMoney" ? "Given" : "Taken"}
      </h2>
      <h1 className={Styles.money}>₹{money} </h1>
    </div>
  );
};

export default TotalGivenOrTaken;
