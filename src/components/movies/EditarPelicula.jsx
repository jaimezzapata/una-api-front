import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

const EditarPelicula = () => {
  const [nombre, setNombre] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [clasificacion, setClasificacion] = useState("");
  const [anio, setAnio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  let redireccion = useNavigate();
  let { id } = useParams();

  async function getPeliculaId() {
    const respuesta = await axios.get("http://localhost:3001/peliculas/" + id);
    setNombre(respuesta.data.nombre);
    setCalificacion(respuesta.data.calificacion);
    setClasificacion(respuesta.data.clasifiacion);
    setAnio(respuesta.data.anio);
    setDescripcion(respuesta.data.descripcion);
  }

  useEffect(() => {
    getPeliculaId();
  }, []);

  async function addPelicula() {
    let peliculaNueva = {
      nombre: nombre,
      calificacion: calificacion,
      clasifiacion: clasificacion,
      anio: anio,
      descripcion: descripcion,
      idGenero: (Math.random() * 10).toFixed(0),
    };
    await axios.put("http://localhost:3001/peliculas/"+id, peliculaNueva);
  }

  const updatePelicula = () => {
    Swal.fire({
      title: "Está seguro que desea editar la pelicula?",
      text: "Luego podrá editar la película",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, editar película",
    }).then((result) => {
      if (result.isConfirmed) {
        addPelicula();
        redireccion("/peliculas");
        Swal.fire({
          title: "Actualizada!",
          text: "La pelicula se ha actualziado correctamente.",
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
            value={nombre}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Calificacion</label>
          <input
            onChange={(e) => setCalificacion(e.target.value)}
            type="text"
            required
            value={calificacion}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Clasificación</label>
          <input
            onChange={(e) => setClasificacion(e.target.value)}
            type="text"
            required
            value={clasificacion}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Año:</label>
          <input
            onChange={(e) => setAnio(e.target.value)}
            type="text"
            required
            value={anio}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Descripción:</label>
          <input
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            required
            value={descripcion}
          />
        </div>
        <button onClick={updatePelicula} type="button">
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditarPelicula;
