import axios from "axios";
import Header from "../helpers/Header";
import { useState } from "react";

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const traerPeliculas = async () => {
    let listadoPeliculas = await axios.get("http://localhost:3001/peliculas");
    setPeliculas(listadoPeliculas.data);
  };
  

  return (
    <div className="peliculas">
      <Header />
      <section className="cards">
        {peliculas.map((pelicula) => (
          <section>
            <p>Nombre: {pelicula.nombre}</p>
            <p>Calificacion: {pelicula.calificacion}</p>
            <p>Clasificacion: {pelicula.clasifiacion}</p>
            <p>Año: {pelicula.anio}</p>
            <p>Descripcion: {pelicula.descripcion}</p>
          </section>
        ))}
      </section>
      <button type="butoon" onClick={traerPeliculas}>
        Mostrar
      </button>
    </div>
  );
};

export default ListarPeliculas;
