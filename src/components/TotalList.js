import { useState } from "react";
import { useSelector } from "react-redux";
import Styles from "../styles/Detail.module.css";

const { default: ListElement } = require("./ListElement");

const TotalList = (props) => {
  return (
    <>
      <fieldset className={Styles.listContainer}>
        <legend>
          <h1 style={{ margin: 0 }}>
            {props.status === "given" ? "Given" : "Taken"}
          </h1>
        </legend>
        <ListElement
          key="2"
          name={props.status === "given" ? "Reciver" : "Lender"}
          money="Money"
          reason="Reason"
          date="Date"
          isHeader={true}
          setUpdateList={props.setUpdateList}
        />
        {props.array.map((value, index) => {
          return (
            <ListElement
              key={value.amount}
              status={props.status}
              name={value.name}
              money={value.amount}
              reason={value.reason} //characters pemisible = 19
              date={value.date}
              index={index}
              lendingStatus={value.lendingStatus}
              setUpdateList={props.setUpdateList}
            />
          );
        })}
        <div>
          <h1>Total = {props.totalMoney}</h1>
        </div>
      </fieldset>
    </>
  );
};

export default TotalList;
