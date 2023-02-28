import Image from "next/image";
import kahta from "../../public/Khatabook.svg.png";
import Styles from "../styles/PageLayout.module.css";

export default function PageLayout(props) {
  return (
    <>
      <div className={Styles.logoContainer}>
        <Image src={kahta} alt="Hisab" width={230} height={55} />
      </div>
      <div>{props.children}</div>
    </>
  );
}
