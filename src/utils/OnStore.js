import { addData } from "./sampleFirebase";

const OnSubmit = async (
  uid,
  userName,
  isGiven,
  givenTo,
  amount,
  reason,
  date,
  onChange,
  callback
) => {
  if (isGiven === "Gave") {
    const data = {
      dataArray: [
        {
          name: givenTo,
          amount: amount,
          reason: reason,
          date: date,
          lendingStatus: true,
        },
      ],
      status: "given",
      otherStatus: "taken",
    };
    await addData(uid, userName, data);
    onChange((prev) => !prev);
  }
  if (isGiven !== "Gave") {
    const data = {
      dataArray: [
        {
          name: givenTo,
          amount: amount,
          reason: reason,
          date: date,
          lendingStatus: false,
        },
      ],
      status: "taken",
      otherStatus: "given",
    };
    await addData(uid, userName, data);
  }
  callback();
};

export default OnSubmit;
