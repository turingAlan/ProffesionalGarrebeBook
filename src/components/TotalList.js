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
            {props.status !== "singleUser"
              ? props.status.slice(0, 1).toUpperCase() + props.status.slice(1)
              : props.name}
          </h1>
        </legend>
        <ListElement
          key="2"
          status={props.status}
          nameStatus={
            props.status === "singleUser"
              ? "Given/Taken"
              : props.status.slice(0, 1).toUpperCase() + props.status.slice(1)
          }
          money="Money"
          reason="Reason"
          date="Date"
          isHeader={true}
          setUpdateList={props.setUpdateList}
        />
        <div className={Styles.scroolList}>
          {props.array.map((value, index) => {
            return props.status === "singleUser" ? (
              <ListElement
                type="singleUser"
                key={value.amount}
                status={value.lendingStatus ? "given" : "taken"}
                nameStatus={value.lendingStatus ? "Given" : "Taken"}
                name={value.name}
                money={value.amount}
                reason={value.reason} //characters pemisible = 19
                date={value.date}
                index={index}
                lendingStatus={value.lendingStatus}
                setUpdateList={props.setUpdateList}
              />
            ) : (
              <ListElement
                type="all"
                key={value.amount}
                status={props.status}
                nameStatus={value.name}
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
        </div>
        <h1 style={{ textAlign: "center", marginBottom: 0, paddingBottom: 0 }}>
          Total = ₹{props.totalMoney}
        </h1>
      </fieldset>
    </>
  );
};

export default TotalList;
