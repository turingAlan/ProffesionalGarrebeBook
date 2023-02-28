import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  arrayRemove,
  FieldValue,
} from "firebase/firestore";
import { dataBase, firebaseApp } from "./firebase";
import { runTransaction } from "firebase/firestore";

const addData = async (uid, name, data) => {
  const transactStatus = `${data.status}Money`;
  const otherTransactStatus = `${data.otherStatus}Money`;
  const AddData = async () => {
    const docRef = doc(dataBase, "hisab", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      try {
        await runTransaction(dataBase, async (transaction) => {
          const sfDoc = await transaction.get(docRef);
          console.log(sfDoc.data()[transactStatus]);
          const updatedTotalAmount =
            parseInt(sfDoc.data()[transactStatus]) +
            parseInt(data.dataArray[0].amount);
          transaction.update(docRef, { [transactStatus]: updatedTotalAmount });
        });
        console.log("Transaction successfully committed!");
      } catch (e) {
        console.log("Transaction failed: ", e);
      }
      try {
        await updateDoc(docRef, {
          [data.status]: arrayUnion(data.dataArray[0]),
          [data.dataArray[0].name]: arrayUnion(data.dataArray[0]),
        });
        console.log("Document updated with ID: ", docRef.id);
        alert("Hisab updated");
      } catch (e) {
        console.error("Error updating document:", e);
        alert("problem in updating please try again");
      }
    } else {
      try {
        await setDoc(docRef, {
          name: name,
          [data.status]: data.dataArray,
          [data.otherStatus]: [],
          [transactStatus]: data.dataArray[0].amount,
          [otherTransactStatus]: 0,
          [data.dataArray[0].name]: [data.dataArray[0]],
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Hisab added");
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("problem in adding please add again");
      }
    }
  };

  await AddData();
};

const getData = async (datafeild, uid) => {
  console.log(datafeild);
  const docRef = doc(dataBase, "hisab", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.data()[datafeild];
};

const deleteData = async (uid, dataObject) => {
  console.log(dataObject);
  const transactStatus = `${dataObject.status}Money`;
  const otherTransactStatus = `${dataObject.otherStatus}Money`;
  const docRef = doc(dataBase, "hisab", uid);
  const docSnap = await getDoc(docRef);
  const arrayData = {
    name: dataObject.name,
    amount: dataObject.amount,
    date: dataObject.date,
    reason: dataObject.reason,
    lendingStatus: dataObject.lendingStatus,
  };
  console.log(arrayData);

  await updateDoc(docRef, {
    [dataObject.status]: arrayRemove(arrayData),
    [dataObject.name]: arrayRemove(arrayData),
  });

  if (docSnap.exists()) {
    try {
      await runTransaction(dataBase, async (transaction) => {
        const sfDoc = await transaction.get(docRef);
        const updatedTotalAmount =
          parseInt(sfDoc.data()[transactStatus]) - parseInt(dataObject.amount);
        transaction.update(docRef, { [transactStatus]: updatedTotalAmount });
      });
      console.log("Transaction successfully committed!");
    } catch (e) {
      console.log("Transaction failed: ", e);
    }
  }
};

const editData = async (uid, oldData, updatedData) => {
  const docRef = doc(dataBase, "hisab", uid);
  const transactStatus = `${oldData.status}Money`;
  await deleteData(uid, oldData);

  try {
    await runTransaction(dataBase, async (transaction) => {
      const sfDoc = await transaction.get(docRef);
      console.log(sfDoc.data()[transactStatus]);
      const updatedTotalAmount =
        parseInt(sfDoc.data()[transactStatus]) + parseInt(updatedData.amount);
      transaction.update(docRef, { [transactStatus]: updatedTotalAmount });
    });
    console.log("Transaction successfully committed!");
  } catch (e) {
    console.log("Transaction failed: ", e);
  }
  try {
    await updateDoc(docRef, {
      [oldData.status]: arrayUnion(updatedData),
      [updatedData.name]: arrayUnion(updatedData),
    });
    console.log("Document updated with ID: ", docRef.id);
    alert("Hisab updated");
  } catch (e) {
    console.error("Error updating document:", e);
    alert("problem in updating please try again");
  }
};

export { addData, getData, deleteData, editData };
