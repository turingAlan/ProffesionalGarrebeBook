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
    <fieldset className={Styles.takenOrGivenBox}>
      <legend style={{ fontSize: 25, fontWeight: "bold" }}>
        {props.status}
      </legend>
      <h2>{money} </h2>
    </fieldset>
  );
};

export default TotalGivenOrTaken;
