const { useState, useEffect } = require("react");
const { default: Button } = require("./Button");
const { default: Input } = require("./Input");
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiRupee, BiQuestionMark } from "react-icons/bi";
import Validate from "../utils/Validation.js";
import { useDispatch, useSelector } from "react-redux";
import OnSubmit from "@/utils/OnStore.js";
import { changeClicked } from "slices/loginSlice.js";
import HashLoader from "react-spinners/HashLoader.js";
import { editData, getData } from "@/utils/sampleFirebase.js";

const MoneySection = (props) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.login.uid);
  const userName = useSelector((state) => state.login.name);
  const clicked = useSelector((state) => state.login.clicked);
  const [name, setName] = useState("");
  const [money, setMoney] = useState("");
  const [reason, setReason] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const [knownPersonArray, setKnownPersonArray] = useState([]);

  const changeClick = () => {
    dispatch(changeClicked());
  };

  useEffect(() => {
    const redeclare = async () => {
      await getData("knownPersonArray", uid).then((value) =>
        setKnownPersonArray(value)
      );
      console.log("clicked");
    };
    redeclare();
  }, [clicked]);

  const UserList = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <AiOutlineUserAdd
          onClick={() => setShowList((prevValue) => !prevValue)}
          className="knownPersonLogo"
        />
        {showList ? (
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              width: "5rem",
              height: "4.8rem",
              overflow: "auto",
              top: "1.2rem",
              left: "0.8rem",
            }}
          >
            <ul>
              {knownPersonArray.map((value) => {
                return (
                  <li
                    style={{ userSelect: "none" }}
                    className="knownPersonListItem"
                    key={value}
                    onClick={(e) => {
                      setName(e.target.innerText);
                      setShowList(false);
                    }}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  };

  const dateCheck = () => {
    const currentDate = new Date();
    var month = "" + (currentDate.getMonth() + 1),
      day = "" + currentDate.getDate(),
      year = currentDate.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (check) {
      setDate([year, month, day].join("-"));
    }

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
          props.onChange,
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
      <form className="border-io" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <Input
            value={name}
            setValue={setName}
            palceholder={props.name || "Enter the name"}
            type="text"
            label="Name"
            labelFor="name"
            icon={UserList}
            error={error}
            required={true}
            width="45%"
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
            width="45%"
          />
        </div>
        <div className="form-row">
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
            width="45%"
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
            width="45%"
          />
        </div>
        <Button
          type="submit"
          value={props.status === "edit" ? "Edit" : "Submit"}
          disabled={error}
          onClick={() => {
            onClick();
          }}
        />
        {isLoading ? <HashLoader size="21" color="blue" /> : null}
      </form>
    </div>
  );
};

export default MoneySection;
