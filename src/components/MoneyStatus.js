import Styles from "../styles/Welcome.module.css";

const MoneyStatus = ({ name }) => {
  return (
    <div>
      <div className={Styles.gareebStatus}>
        <h1 style={{ textAlign: "center" }}>
          {name.slice(0, 1).toUpperCase()}
          {name.slice(1)},<span> your current Garrebe status </span>
        </h1>
      </div>
    </div>
  );
};

export default MoneyStatus;
