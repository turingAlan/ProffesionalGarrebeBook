import Image from "next/image";
import kahta from "../../public/Khatabook.svg.png";
import Styles from "../styles/PageLayout.module.css";
import Navigation from "./Navigation";
import SocialMediaLinks from "./SocialMediaLinks";

export default function PageLayout(props) {
  return (
    <>
      <Navigation />
      <div>{props.children}</div>
      <SocialMediaLinks />
    </>
  );
}
