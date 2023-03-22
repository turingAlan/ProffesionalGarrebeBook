import React from "react";

import Styles from "../styles/Links.module.css";

function SocialMediaLinks() {
  return (
    <div>
      <ul>
        <li>
          <a class={Styles.linkedin} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a class={Styles.twitter} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a class={Styles.instagram} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a class={Styles.github} href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMediaLinks;
