const { useState, useContext, useEffect } = require("react");
const { default: Button } = require("./Button");
const { default: Input } = require("./Input");
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiRupee, BiQuestionMark } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import Validate from "../utils/Validation.js";
import { Context } from "@/utils/Context.js";
import sampleFirebase, { addData } from "@/utils/sampleFirebase.js";
import { useSelector } from "react-redux";
import OnSubmit from "@/utils/OnStore.js";

const MoneySection = (props) => {
  const uid = useSelector((state) => state.login.uid);
  const userName = useSelector((state) => state.login.name);
  const [name, setName] = useState("");
  const [money, setMoney] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(true);
  const [error, setError] = useState("");
  const dateCheck = () => {
    const currentDate = new Date();
    var month = "" + (currentDate.getMonth() + 1),
      day = "" + currentDate.getDate(),
      year = currentDate.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    setDate([year, month, day].join("-"));

    return (
      <input
        type="checkbox"
        className="date-check"
        value="yes"
        checked={check}
        onChange={(e) => {
          setCheck(!check);
          if (!check) {
            console.log(check);
            setDate("2023-02-03");
          }
        }}
      />
    );
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
            palceholder="Enter the name"
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
            palceholder="Enter the amount"
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
            palceholder="Enter the reason"
            type="text"
            label="Reason"
            labelFor="reason"
            icon={BiQuestionMark}
            error={error}
            required={false}
          />
          <Input
            value={date}
            setValue={setDate}
            palceholder="Enter the reason"
            type="date"
            label="Date"
            labelFor="Deason"
            icon={dateCheck}
            error={error}
            required={false}
          />
          <Button
            type="submit"
            value="Submit"
            disabled={error}
            onClick={() =>
              OnSubmit(uid, userName, props.section, name, money, reason, date)
            }
          />
          <h1></h1>
        </form>
      </fieldset>
    </div>
  );
};

export default MoneySection;
