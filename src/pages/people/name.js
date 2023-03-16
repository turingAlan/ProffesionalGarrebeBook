const { useState, useEffect } = require("react");
import PageLayout from "@/components/PageLayout";
import TotalList from "@/components/TotalList";
import { getData } from "@/utils/sampleFirebase";
import { useSelector } from "react-redux";
import Styles from "../../styles/Detail.module.css";

const Profile = (props) => {
  const name = router.query;
  const [updateList, setUpdateList] = useState(true);
  const [UserDataArray, setUserDataArray] = useState([]);
  const uid = useSelector((state) => state.login.uid);
  useEffect(() => {
    const redeclare = async () => {
      await getData(name, uid).then((value) => setUserDataArray(value));
    };
    redeclare();
  }, [updateList]);

  return (
    <PageLayout>
      {uid ? (
        <>
          <h1 className={Styles.hisabDescription}>
            Your current hisab list is
          </h1>
          <div className={Styles.bothListContainer}>
            <TotalList
              array={givenArray}
              status="given"
              setUpdateList={setUpdateList}
              totalMoney={givenMoney}
            />
          </div>
        </>
      ) : null}
    </PageLayout>
  );
};

export default Profile;
