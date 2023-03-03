const { useState, useContext, useEffect } = require("react");
const { default: Button } = require("./Button");
const { default: Input } = require("./Input");
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiRupee, BiQuestionMark } from "react-icons/bi";
import Validate from "../utils/Validation.js";
import { useDispatch, useSelector } from "react-redux";
import OnSubmit from "@/utils/OnStore.js";
import { changeClicked } from "slices/loginSlice.js";
import HashLoader from "react-spinners/HashLoader.js";
import { deleteData, editData } from "@/utils/sampleFirebase.js";

const MoneySection = (props) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.login.uid);
  const userName = useSelector((state) => state.login.name);
  const [name, setName] = useState("");
  const [money, setMoney] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeClick = () => {
    dispatch(changeClicked());
  };
  const dateCheck = () => {
    const currentDate = new Date();
    var month = "" + (currentDate.getMonth() + 1),
      day = "" + currentDate.getDate(),
      year = currentDate.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return (
      <input
        type="checkbox"
        className="date-check"
        value="yes"
        checked={check}
        onChange={(e) => {
          setCheck(!check);
          if (check) {
            setDate([year, month, day].join("-"));
          }
        }}
      />
    );
  };

  const onClick = async () => {
    setIsLoading(true);
    const dataObject = {
      name: props.name,
      amount: props.money,
      reason: props.reason,
      date: props.date,
      lendingStatus: props.section === "given" ? true : false,
      status: props.section,
    };
    const newDataObject = {
      name: name,
      amount: money,
      reason: reason,
      date: date,
      lendingStatus: props.section === "given" ? true : false,
    };
    props.status !== "edit"
      ? await OnSubmit(
          uid,
          userName,
          props.section,
          name,
          money,
          reason,
          date,
          props.setChange,
          changeClick
        )
      : await editData(uid, dataObject, newDataObject);
    setIsLoading(false);
  };

  useEffect(() => {
    setError(Validate(name, money, reason));
  }, [name, reason, money]);

  return (
    <div className="io">
      <fieldset className="border-io">
        <legend>
          <h1 style={{ margin: 0 }}>{props.section}</h1>
        </legend>
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <Input
            value={name}
            setValue={setName}
            palceholder={props.name || "Enter the name"}
            type="text"
            label="Name"
            labelFor="name"
            icon={AiOutlineUserAdd}
            error={error}
            required={true}
          />
          <Input
            value={money}
            setValue={setMoney}
            palceholder={props.money || "Enter the amount"}
            type="text"
            label="Money"
            labelFor="money"
            icon={BiRupee}
            error={error}
            required={true}
          />
          <Input
            value={reason}
            setValue={setReason}
            palceholder={props.reason || "Enter the reason"}
            type="text"
            label="Reason"
            labelFor="reason"
            icon={BiQuestionMark}
            error={error}
            required={false}
          />
          <Input
            value={props.date || date}
            setValue={setDate}
            type="date"
            label="Date"
            labelFor="Date"
            icon={dateCheck}
            error={error}
            required={false}
          />
          <Button
            type="submit"
            value={props.status === "edit" ? "Edit" : "Submit"}
            disabled={error}
            onClick={() => {
              onClick();
            }}
          />
          {isLoading ? <HashLoader size="21" color="blue" /> : null}
          <h1></h1>
        </form>
      </fieldset>
    </div>
  );
};

export default MoneySection;
