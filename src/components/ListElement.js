import Link from "next/link";
import { useEffect, useState } from "react";
import Styles from "../styles/Detail.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import EditPage from "./EditPage";
import RemovePage from "./RemovePage";
import { useSelector } from "react-redux";

const ListElement = (props) => {
  const [ReasonExpand, setReasonExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const uid = useSelector((state) => state.login.uid);
  const reason =
    props.reason.length >= 15
      ? props.reason.slice(0, 15) + "..."
      : props.reason;

  useEffect(
    () => props.setUpdateList((prevValue) => !prevValue),
    [remove, edit]
  );
  return (
    <>
      <div
        className={Styles.listElementContainer}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ul
          className={
            props.isHeader
              ? `${Styles.list} ${Styles.listHeader}`
              : hover
              ? `${Styles.list} ${Styles.hover}`
              : Styles.list
          }
        >
          <li className={Styles.listElement}>₹{props.money}</li>
          <Link href={`people/${props.name}`}>
            <li className={Styles.listElement}>{props.name}</li>
          </Link>
          {props.isHeader ? (
            <li className={Styles.listElement}>{reason}</li>
          ) : (
            <li
              style={{ userSelect: "none" }}
              onClick={() => setReasonExpand((prevState) => !prevState)}
              className={Styles.listElement}
            >
              {ReasonExpand ? props.reason : reason}
            </li>
          )}
          <li className={Styles.listElement}>
            {props.date ? props.date : "Yaad nahi"}
          </li>
        </ul>
        {hover && !props.isHeader ? (
          <div className={Styles.hoverDiv}>
            <MdModeEditOutline onClick={() => setEdit(true)} />
            <AiOutlineDelete onClick={() => setRemove(true)} />
          </div>
        ) : null}
      </div>
      {edit ? (
        <EditPage
          status={props.status}
          name={props.name}
          money={props.money}
          reason={props.reason}
          date={props.date}
          setPage={setEdit}
          index={props.index}
        />
      ) : null}
      {remove ? (
        <RemovePage
          setPage={setRemove}
          uid={uid}
          status={props.status}
          name={props.name}
          money={props.money}
          reason={props.reason}
          date={props.date}
        />
      ) : null}
    </>
  );
};

export default ListElement;
