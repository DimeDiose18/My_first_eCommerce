import React from "react";
import NavBar from "../../component/NavBar/NavBar"
import styles from "./home.module.css"
import Drawer from "../../component/Drawer/Drawer"


const Home = () => {
    return (
        <div className={styles.container}>
            <div>
                <NavBar />
                <Drawer /> 
            </div>
        </div>
    );
}

export default Home;