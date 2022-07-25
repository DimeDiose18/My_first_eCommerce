import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import styles from "./home.module.css";
import Drawer from "../../component/Drawer/Drawer";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <NavBar />
        <Drawer />
      </div>
      <div className={styles.store_nav}>
        <div>
          <ul>
            <li>
              <a href="#">Tu tienda</a>
            </li>
            <li>
              <a href="#">Nuevo y destacable</a>
            </li>
            <li>
              <a href="#">Categorías</a>
            </li>
            <li>
              <a href="#">Tienda de puntos</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Laboratorios</a>
            </li>
          </ul>
        </div>
        <input></input>
      </div>
    </div>
  );
};

export default Home;
