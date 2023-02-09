import { useState,useContext } from "react"
import {AiOutlineUserAdd} from "react-icons/ai"
const { default: Input } = require("@/components/Input")
import { AuthErrorCodes, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { firebaseApp } from "../utils/firebase";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux'
import { login} from '../../slices/loginSlice'
 



const SignUp =()=>{
  const router = useRouter()
  const loginStatus = useSelector(state=>state.login.isLogin)
  console.log(loginStatus)
  const dispatch = useDispatch()
  
    const auth = getAuth(firebaseApp)
    const [email,setEmail] = useState("")
    const [password,setPassword]  = useState("")
    const [error,setError]  =useState("")
    const [UserName,setName] = useState("")
    const [uid,setUid]  = useState("")

    const onClick = ()=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        
        setUid(userCredential.user.uid);
        dispatch(login(uid,UserName))
        
        router.push({
          pathname: '/',
          // query: { uid: 'Someone' }
      }, '/')
      ;
      })
      .catch((err) => {
        if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
        setError("The password is too weak.");
      } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("The email address is already in use.");
      } else {
        console.log(err.code);
        alert(err.code);
      }
      });
  };
    return(
      <div>
      <h1>
        SignUp
      </h1>
          <Input value = {email} setValue = {setEmail} palceholder = "Enter the mail" type = "mail" label = "Email" labelFor= "Email" icon = {AiOutlineUserAdd} required = {true} error/>
            <Input value = {password} setValue = {setPassword} palceholder = "Enter the password" type = "password" label = "password" labelFor= "password" icon = {AiOutlineUserAdd} required = {true} error = {error}/>
            <Input value = {UserName} setValue = {setName} palceholder = "Enter your name" type = "text" label = "Name" labelFor= "Name" icon = {AiOutlineUserAdd} required = {false} error = {error}/>
            <Button value = "submit" onClick = {onClick} disabled = {false}/>
</div>
        )
    


}

export default SignUp