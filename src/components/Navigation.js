const { default: Image } = require("next/image")
const { default: Link } = require("next/link")
import kahta from "../../public/Khatabook.svg.png"
import Styles from "../styles/Navigation.module.css"
const Navigation  = ()=>{
    return(
        <ul className={Styles.list}>
        <li className={Styles.logo}>
            
            <Link href="/">
            <Image src={kahta} alt= "Hisab" width={250}
      height={60}/>

            </Link>

        </li>
        
        <li  className={Styles.navigate}>
        Hisab
            
        </li>
        
        <li className={Styles.navigate}>
            Hisab
        </li>
        
        <li className={Styles.navigate}>
            Hisab
        </li>
    </ul>
    )
}
export default Navigation