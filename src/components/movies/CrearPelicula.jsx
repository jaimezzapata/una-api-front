import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 } from 'uuid';

const CrearPelicula = () => {
  const [nombre, setNombre] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [anio, setAnio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  async function addPelicula() {
    let peliculaNueva = {
      id: v4(),
      nombre: nombre,
      calificacion: calificacion,
      clasifiacion: clasificacion,
      anio: anio,
      descripcion: descripcion,
      idGenero: (Math.random() * 10).toFixed(0),
    };
    await axios.post("http://localhost:3001/peliculas", peliculaNueva);
  }

  const agregarPelicula = () => {
    Swal.fire({
      title: "Está seguro que desea crear la pelicula?",
      text: "Luego podrá eliminar la película",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, crear película",
    }).then((result) => {
      if (result.isConfirmed) {
        addPelicula();
        Swal.fire({
          title: "Creada!",
          text: "La pelicula se ha creado correctamente.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="form-container">
      <h2>Formulario de Captura</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Calificacion</label>
          <input
            onChange={(e) => setCalificacion(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Clasificación</label>
          <input
            onChange={(e) => setClasificacion(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Año:</label>
          <input
            onChange={(e) => setAnio(e.target.value)}
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Descripción:</label>
          <input
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            required
          />
        </div>
        <button onClick={agregarPelicula} type="button">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CrearPelicula;
