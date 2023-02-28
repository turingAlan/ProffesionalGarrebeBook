const { useState, useEffect } = require("react");
import ListElement from "@/components/ListElement";
import PageLayout from "@/components/PageLayout";
import TotalGivenOrTaken from "@/components/TotalGivenOrTaken";
import TotalList from "@/components/TotalList";
import { getData } from "@/utils/sampleFirebase";
import { useSelector } from "react-redux";
import Styles from "../../styles/Detail.module.css";

const Profile = (props) => {
  const [updateList, setUpdateList] = useState(true);
  const [givenArray, setGivenArray] = useState([]);
  const [takenArray, setTakenArray] = useState([]);
  const [takenMoney, setTakenMoney] = useState(0);
  const [givenMoney, setGivenMoney] = useState(0);
  const uid = useSelector((state) => state.login.uid);
  useEffect(() => {
    const redeclare = async () => {
      await getData("givenMoney", uid).then((value) => setGivenMoney(value));
      await getData("takenMoney", uid).then((value) => setTakenMoney(value));
      await getData("given", uid).then((value) => setGivenArray(value));
      await getData("taken", uid).then((value) => setTakenArray(value));
    };
    redeclare();
  }, [updateList]);

  return (
    <PageLayout>
      <h1 className={Styles.hisabDescription}>Your current hisab list is</h1>
      <div className={Styles.bothListContainer}>
        <TotalList
          array={givenArray}
          status="given"
          setUpdateList={setUpdateList}
          totalMoney={givenMoney}
        />
        <TotalList
          array={takenArray}
          status="taken"
          setUpdateList={setUpdateList}
          totalMoney={takenMoney}
        />
      </div>
    </PageLayout>
  );
};

export default Profile;
