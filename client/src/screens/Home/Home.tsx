import React, { useState } from "react";
import NavBar from "../../component/NavBar/NavBar"
import styles from "./home.module.css"
import Drawer from "../../component/Drawer/Drawer"

type Anchor = "left";

const Home = () => {
    const [openDrawer, setOpenDrawer] = useState({
        left: false,
      });

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenDrawer({ ...openDrawer, [anchor]: open });
    };
    
    return (
        <div className={styles.container}>
            <div>
                <NavBar toggleDrawer={toggleDrawer} openDrawer={openDrawer}/>
                <Drawer openDrawer={openDrawer} toggleDrawer={toggleDrawer}/> 
            </div>
        </div>
    );
}

export default Home;