const { useState, useEffect } = require("react");
import PageLayout from "@/components/PageLayout";
import TotalList from "@/components/TotalList";
import { getData } from "@/utils/sampleFirebase";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Styles from "../../styles/Detail.module.css";

const Profile = (props) => {
  const router = useRouter();
  const name = router.query.name;
  const [updateList, setUpdateList] = useState(true);
  const [totalMoney, setTotalMoney] = useState(0);
  const [givenMoney, setGivenMoney] = useState(0);
  const [takenMoney, setTakenMoney] = useState(0);
  const [userDataArray, setUserDataArray] = useState([]);
  const uid = useSelector((state) => state.login.uid);

  const calculateTotalMoney = () => {
    setGivenMoney(0);
    setTakenMoney(0);
    userDataArray.forEach((value) => {
      value.lendingStatus
        ? setGivenMoney((prevState) => prevState + parseInt(value.amount))
        : setTakenMoney((prevState) => prevState + parseInt(value.amount));
    });
    setTotalMoney(givenMoney - takenMoney);
  };

  useEffect(() => {
    let tempArray = [];
    const redeclare = async () => {
      await getData(name, uid).then((value) => {
        setUserDataArray(value);
        calculateTotalMoney(userDataArray);
      });
    };

    redeclare();
    calculateTotalMoney();
  }, [updateList]);
  useEffect(() => {
    const redeclare = async () => {
      await getData(name, uid).then((value) => setUserDataArray(value));
    };

    redeclare();
    calculateTotalMoney();
  });

  return (
    <PageLayout>
      {uid ? (
        <>
          <h2 className={Styles.hisabDescription}>
            Your current Financial statement with {name}
          </h2>
          <div className={Styles.bothListContainer}>
            <TotalList
              name={name}
              array={userDataArray}
              status="singleUser"
              setUpdateList={setUpdateList}
              totalMoney={totalMoney}
            />
          </div>
        </>
      ) : null}
    </PageLayout>
  );
};

export default Profile;
