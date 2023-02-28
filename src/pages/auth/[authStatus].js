import { useState, useContext } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdPassword } from "react-icons/Md";
const { default: Input } = require("@/components/Input");

import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { dataBase, firebaseApp } from "../../utils/firebase";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { login, nameSet } from "../../../slices/loginSlice";
import Link from "next/link";
import Styles from "../../styles/Auth.module.css";
import Navigation from "@/components/Navigation";
import { doc, getDoc } from "firebase/firestore";
import { HashLoader } from "react-spinners";

const Auth = () => {
  const router = useRouter();
  const { authStatus } = router.query;
  const dispatch = useDispatch();
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setName] = useState("");
  const [uid, setUid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onClick = () => {
    setIsLoading(true);
    if (authStatus === "login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const ref = doc(dataBase, "hisab", userCredential.user.uid);
          const snap = await getDoc(ref);
          const userName = snap.data().name;
          dispatch(nameSet(userName));
          console.log("user exist and sucessfully logged in");
          dispatch(login(userCredential.user.uid));
          setIsLoading(false);
          router.push(
            {
              pathname: "/",
            },
            "/"
          );
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
      console.log(error);
    }

    if (authStatus === "sign-up") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          setUid(userCredential.user.uid);
          dispatch(login(userCredential.user.uid));
          dispatch(nameSet(userName));
          setIsLoading(false);
          router.push(
            {
              pathname: "/",
            },
            "/"
          );
        })
        .catch((err) => {
          console.log("error is signup");
          if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
            setError("The password is too weak.");
          } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
            setError("The email address is already in use.");
          } else {
            console.log(err.code);
          }
          alert(error);
        });
    }
  };

  return (
    <div>
      <Navigation />
      <div className={Styles.authContainer}>
        <fieldset className={Styles.border}>
          <legend>
            <h1>{authStatus === "login" ? "Login" : "Sign-up"}</h1>
          </legend>
          <div className={Styles.inputContainer}>
            <Input
              value={email}
              setValue={setEmail}
              palceholder="Enter the mail"
              type="mail"
              label="Email"
              labelFor="Email"
              icon={AiOutlineUserAdd}
              required={true}
              error
            />
          </div>
          <div className={Styles.inputContainer}>
            <Input
              value={password}
              setValue={setPassword}
              palceholder="Enter the password"
              type="password"
              label="password"
              labelFor="password"
              icon={MdPassword}
              required={true}
              error={error}
            />
          </div>
          {authStatus !== "login" ? (
            <div className={Styles.inputContainer}>
              <Input
                value={userName}
                setValue={setName}
                palceholder="Enter your name"
                type="text"
                label="Name"
                labelFor="Name"
                icon={AiOutlineUserAdd}
                required={false}
                error={error}
              />
            </div>
          ) : null}
          <div className={Styles.submitButton}>
            <Button value="submit" onClick={() => onClick()} disabled={false} />
          </div>
        </fieldset>
        <Link href={authStatus === "login" ? "/auth/sign-up" : "/auth/login"}>
          <div className={Styles.switchButton}>
            <Button
              value={authStatus === "login" ? "Go to Signup" : "Go to login"}
              onClick={() => onClick()}
              disabled={false}
            />
          </div>
        </Link>
      </div>
      {isLoading ? (
        <div className={Styles.loading}>
          <HashLoader color="black" size={80} />
        </div>
      ) : null}
    </div>
  );
};

export default Auth;
