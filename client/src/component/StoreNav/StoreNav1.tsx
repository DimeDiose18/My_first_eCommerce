import { height } from "@mui/system";
import React, { useState } from "react";
import styles from "./storeNav1.module.css";

type Props = {
  data: any;
};
const StoreNav1 = ({ data }: Props) => {
  const [stylesHidden, setStylesHidden] = useState({
    display: "none",
  });
  const [flag, setFlag] = useState(false);

  const handleToggleOption = (e: any) => {
    console.log(e.target.id);
    setFlag(!flag);
    flag
      ? setStylesHidden({ display: "none" })
      : setStylesHidden({ display: "block" });
  };
  return (
    <div className={styles.containerMenu}>
      {data?.map((e: any) => {
        if (e.href) {
          return (
            <div className={styles.containerEnlaces}>
              <div className={styles.opcion}>
                <a key={e.title} href={e.href}>
                  {e.title}
                </a>
              </div>
            </div>
          );
        } else {
          return (
            <div className={styles.containerEnlaces}>
              <div className={styles.opcion}>
                <p id={e.title} onClick={(e: any) => handleToggleOption(e)}>
                  {e.title}
                </p>
              </div>
              <div>
                {e.enlaces?.map((element: any) => {
                return (
                  <div
                    className={styles.enlace}
                    style={{ display: stylesHidden.display }}
                  >
                    <a key={element.title} href={element.href}>
                      {element.strong ? (
                        <strong>{element.title}</strong>
                      ) : (
                        element.title
                      )}
                    </a>
                  </div>
                );
              })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default StoreNav1;
