import Image from "next/image";
import kahta from "../../public/Khatabook.svg.png";
import Styles from "../styles/PageLayout.module.css";
import Navigation from "./Navigation";

export default function PageLayout(props) {
  return (
    <>
      <Navigation />
      <div>{props.children}</div>
    </>
  );
}
