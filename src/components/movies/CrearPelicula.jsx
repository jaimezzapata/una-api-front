import { useState } from "react";
import Swal from "sweetalert2";

const CrearPelicula = () => {
  const [nombre, setNombre] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [anio, setAnio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarPelicula = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
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
