const { useState, useEffect } = require("react");
import PageLayout from "@/components/PageLayout";
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
      {uid ? (
        <>
          <h2 className={Styles.hisabDescription}>
            Your current FinanceBook list is
          </h2>
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
        </>
      ) : null}
    </PageLayout>
  );
};

export default Profile;
