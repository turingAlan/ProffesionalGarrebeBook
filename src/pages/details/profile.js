const { useState } = require("react");
import ListElement from "@/components/ListElement";
import Styles from "../../styles/Detail.module.css";

const Profile = (props) => {
  const [dataArray, setDataArray] = useState([]);
  return (
    <div>
      <ListElement
        name="Name"
        money="Money"
        reason="Reason"
        date="Date"
        isHeader={true}
      />
    </div>
  );
};

export default Profile;
