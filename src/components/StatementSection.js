import React, { useState } from "react";
import MoneySection from "./MoneySection";
import Styles from "../styles/EnterHisab.module.css";
import MoneyStatus from "./MoneyStatus";
import LoginToGo from "./LoginToGo";
import { useSelector } from "react-redux";

function StatementSection() {
  const [status, setstatus] = useState("Gave");
  const isLogin = useSelector((state) => state.login.isLogin);
  const Name = useSelector((state) => state.login.name);
  const uid = useSelector((state) => state.login.uid);
  const [dataChange, setDataChange] = useState(false);

  return (
    <div className={Styles.container}>
      {isLogin ? <MoneyStatus name={Name} uid={uid} /> : <LoginToGo />}
      <div className={Styles.HisabContainer}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            margin: "0",
            letterSpacing: "0.12rem",
            fontWeight: "500",
          }}
        >
          Enter a new Statement
        </h2>

        <div className={Styles.givenTakenContainer}>
          <h2
            onClick={() => setstatus("Gave")}
            style={{
              margin: "1rem",
              color: status === "Gave" ? "violet" : "grey",
              textDecoration: status === "Gave" ? "underline" : "none",
              userSelect: "none",
            }}
          >
            Given
          </h2>
          <h2
            onClick={() => setstatus("Take")}
            style={{
              margin: "1rem",
              color: status === "Take" ? "violet" : "grey",
              textDecoration: status === "Take" ? "underline" : "none",
              userSelect: "none",
            }}
          >
            Taken
          </h2>
        </div>
        <MoneySection section={status} status="add" onChange={setDataChange} />
      </div>
    </div>
  );
}

export default StatementSection;
