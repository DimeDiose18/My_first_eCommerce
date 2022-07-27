import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import styles from "./home.module.css";
import Drawer from "../../component/Drawer/Drawer";
import StoreNav1 from "../../component/StoreNav/StoreNav1";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <NavBar />
        <StoreNav1 />
        <Drawer />
        

      </div>
    </div>
  );
};

export default Home;
