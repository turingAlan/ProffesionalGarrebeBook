const { default: Image } = require("next/image")
const { default: Link } = require("next/link")
import kahta from "../../public/Khatabook.svg.png"
import Styles from "../styles/Navigation.module.css"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from 'react-redux'


const Navigation  = (props)=>{

    const loginStatus = useSelector((state)=> state.login.value)
    const router  = useRouter()
    return(
       
        <ul className={Styles.list}>
        <li className={Styles.logo}>
            
            <Link href="/">
            <Image src={kahta} alt= "Hisab" width={250}
      height={60}/>

            </Link>

        </li>
        
        <li  className={Styles.navigate}>
        hello
        </li>
        
        <li className={Styles.navigate}>
        <Link href="/signup">
            {loginStatus?"loggedin":"login"}
        </Link>
           
        </li>
        
        <li className={Styles.navigate}>
            Hisab
        </li>
    </ul>
    )
}
export default Navigation