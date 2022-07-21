import React from "react";
import styles from "./navBar.module.css";
import menuimg from "../../assets/images/menu1.png";
import logoimg from "../../assets/images/logoloopcompleto.svg";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img className={styles.menu} src={menuimg}></img>
      </div>

      <div className={styles.navbar_logo}>
        <img className={styles.img2} src={logoimg}></img>
      </div>
    </nav>
  );
};

export default NavBar;
