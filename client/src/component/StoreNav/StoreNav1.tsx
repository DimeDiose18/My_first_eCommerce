import { useState } from "react";
import styles from "./storeNav1.module.css";

type Props = {
  data: any;
};
const StoreNav1 = ({ data }: Props) => {
  const [flag, setFlag] = useState(false);

  const handleToggleOption = (e: any) => {
    const links = [...e.view.document.links];
    console.log("🚀 ~ file: StoreNav1.tsx ~ line 12 ~ handleToggleOption ~ links", links)
    
    links.forEach((element: any) => {
      if (element.id && element.id === e.target.id) {
        console.log("entra");
        console.log(flag);
        flag
          ? element.style.setProperty("display", "none")
          : element.style.setProperty("display", "block");
      }
    });
    setFlag(!flag);
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
              <div
                className={styles.opcion}
                onClick={(e: any) => handleToggleOption(e)}
              >
                <p id={e.id}>{e.title}</p>
              </div>
              <div className={styles.enlace}>
                {e.enlaces?.map((element: any) => {
                  return (
                    <a
                      style={{ display: "none" }}
                      id={e.id}
                      key={element.title}
                      href={element.href}
                    >
                      {element.strong ? (
                        <strong>{element.title}</strong>
                      ) : (
                        element.title
                      )}
                    </a>
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
