import Styles from "../styles/Detail.module.css";

const ListElement = (props) => {
  return (
    <div>
      <ul
        className={
          props.isHeader ? `${Styles.list} ${Styles.listHeader}` : Styles.list
        }
      >
        <li>{props.name}</li>
        <li>{props.money}</li>
        <li>{props.reason}</li>
        <li>{props.date}</li>
      </ul>
    </div>
  );
};

export default ListElement;
