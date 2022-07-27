import styles from "./navBar.module.css";
import menuimg from "../../assets/images/menu1.png";
import logoimg from "../../assets/images/logoloopcompleto.svg";

type Props = {
  toggleDrawer: Function;
  openDrawer: { left: boolean };
};
const NavBar = ({ toggleDrawer, openDrawer }: Props) => {
  return (
    <nav>
      <div>
        <img
          onClick={toggleDrawer("left", !openDrawer.left)}
          className={styles.menu}
          src={menuimg}
          alt="img"
        ></img>
      </div>

      <div className={styles.navbar_logo}>
        <img className={styles.img2} src={logoimg} alt="img"></img>
      </div>
    </nav>
  );
};

export default NavBar;
