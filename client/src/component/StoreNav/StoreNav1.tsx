import React from "react";
import styles from "./storeNav1.module.css";

const StoreNav1 = () => {
  return (
    <div>
      <div className={styles.containerMenu}>
        
        <div className={styles.containerEnlaces}>
          <div className={styles.opcion}>
            <p> Tu tienda </p>
          </div>
          <div className={styles.enlace}>
            <a href="#">Inicio</a>
            <a href="#">Recomendaciones de la comunidad</a>
            <a href="#">Vistos recientemente</a>
          </div>
        </div>

        <div className={styles.containerEnlaces}>
          <div className={styles.opcion}>
            <p> Nuevo y destacable </p>
          </div>
          <div className={styles.enlace}>
            <a href="#">Lo más descargado</a>
            <a href="#">Novedades y tendencias</a>
            <a href="#">Ofertas especiales</a>
            <a href="#">Próximos lanzamientos especiales</a>
          </div>
        </div>

        <div className={styles.containerEnlaces}>
          <div className={styles.opcion}>
            <p> Categorias </p>
          </div>
          <div className={styles.enlace}>
            <a href="#">Free to Play</a>
            <a href="#">Demos</a>
            <a href="#">Bandas sonoras</a>
            <a href="#">Títulos en RV</a>
            <a href="#">
              <strong>Géneros</strong>
            </a>
            <a href="#">Acción</a>
            <a href="#">Aventura</a>
            <a href="#">De rol</a>
            <a href="#">Simulación</a>
            <a href="#">Estrategia</a>
            <a href="#">Deportes y carreras</a>
            <a href="#">Temáticas</a>
          </div>
        </div>

        <div className={styles.containerEnlaces}>
          <div className={styles.opcion}>
            <p> Tienda de puntos </p>
          </div>
        </div>

        <div className={styles.containerEnlaces}>
          <div className={styles.opcion}>
            <p> Noticias </p>
          </div>
        </div>

        <div className={styles.containerEnlaces}>
          <div className={styles.opcion}>
            <p> Laboratorio </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreNav1;
