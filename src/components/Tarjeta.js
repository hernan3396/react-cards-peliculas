import React from "react";
import Style from "./Tarjeta.module.css";

function Tarjeta({ nombre, publicacion, imagenUrl, puntaje }) {
  const reviewStyle = Style[puntaje];
  return (
    <>
      <div className={Style.nombre}>
        {nombre} {publicacion}
      </div>
      <div className={reviewStyle}>equisde</div>
      <img src={imagenUrl} alt="" />
    </>
  );
}

export default Tarjeta;
