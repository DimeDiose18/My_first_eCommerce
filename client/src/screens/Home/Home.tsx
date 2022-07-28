import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import styles from "./home.module.css";
import Drawer from "../../component/Drawer/Drawer";
import StoreNav1 from "../../component/StoreNav/StoreNav1";

const Home = () => {
  const storeNavData = [
    {
      title: "Tu tienda",
      id: "tu_tienda",
      enlaces: [
        { title: "Inicio", href: "#" },
        { title: "Recomendaciones de la comunidad", href: "#" },
        { title: "Vistos recientemente", href: "#" },
      ],
    },
    {
      title: "Nuevo y destacable",
      id: "nuevo_y_destacable",
      enlaces: [
        { title: "Lo más descargado", href: "#" },
        { title: "Novedades y tendencias", href: "#" },
        { title: "Ofertas especiales", href: "#" },
        { title: "Próximos lanzamientos especiales", href: "#" },
      ],
    },
    {
      title: "Categorías",
      id: "categorias",
      enlaces: [
        { title: "Free to Play", href: "#" },
        { title: "Demos", href: "#" },
        { title: "Bandas sonoras", href: "#" },
        { title: "Títulos en RV", href: "#" },
        { title: "Géneros", href: "#", strong: true },
        { title: "Acción", href: "#" },
        { title: "Aventura", href: "#" },
        { title: "De rol", href: "#" },
        { title: "Simulación", href: "#" },
        { title: "Estrategia", href: "#" },
        { title: "Deportes y carreras", href: "#" },
        { title: "Temáticas", href: "#" },
      ],
    },
    { title: "Tienda de puntos", href: "#"},
    { title: "Noticias", href: "#" },
    { title: "Laboratorio", href: "#" },
  ];
  return (
    <div className={styles.container}>
      <div>
        <NavBar />
        <StoreNav1 data={storeNavData} />
        <Drawer />
      </div>
    </div>
  );
};

export default Home;
