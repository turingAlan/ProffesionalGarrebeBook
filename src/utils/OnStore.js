import { useSelector } from "react-redux";
import { addData } from "./sampleFirebase";

const OnSubmit = (uid, userName, isGiven, givenTo, amount, reason, date) => {
  if (isGiven === "Gave") {
    const data = {
      dataArray: [
        { name: givenTo, amount: amount, reason: reason, date: date },
      ],
      status: "given",
      otherStatus: "taken",
    };
    addData(uid, userName, data);
  }
  if (isGiven !== "Gave") {
    const data = {
      dataArray: [
        { name: givenTo, amount: amount, reason: reason, date: date },
      ],
      status: "taken",
      otherStatus: "given",
    };
    addData(uid, userName, data);
  }
};

export default OnSubmit;
