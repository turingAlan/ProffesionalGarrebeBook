import { Prosto_One } from "@next/font/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { async } from "validate.js";
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
      <h2> {props.status}</h2>
      <h3>{money} </h3>
    </div>
  );
};

export default TotalGivenOrTaken;
