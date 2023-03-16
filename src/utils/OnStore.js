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
  const UserName =
    userName.slice(0, 1).toUpperCase() + userName.slice(1).toLowerCase();
  const GivenTo =
    givenTo.slice(0, 1).toUpperCase() + givenTo.slice(1).toLowerCase();
  if (isGiven === "Gave") {
    const data = {
      dataArray: [
        {
          name: GivenTo,
          amount: amount,
          reason: reason,
          date: date,
          lendingStatus: true,
          // time: new Date().getTime(),
        },
      ],
      status: "given",
      otherStatus: "taken",
    };
    await addData(uid, UserName, data);
    onChange((prev) => !prev);
  }
  if (isGiven !== "Gave") {
    const data = {
      dataArray: [
        {
          name: GivenTo,
          amount: amount,
          reason: reason,
          date: date,
          lendingStatus: false,
          // time: new Date().getTime(),
        },
      ],
      status: "taken",
      otherStatus: "given",
    };
    await addData(uid, UserName, data);
  }
  callback();
};

export default OnSubmit;
