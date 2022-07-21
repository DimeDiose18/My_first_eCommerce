import React from "react";
import NavBar from "../../component/NavBar/NavBar"
import styles from "./home.module.css"


const Home = () => {
    return (
        <div className={styles.container}>
            <div>
             <NavBar />   
            </div>
        </div>
    );
}

export default Home;