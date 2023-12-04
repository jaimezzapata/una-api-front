import { useState } from "react";


const CrearPelicula = () => {
  const [nombre, setNombre] = useState('')
  const [calificacion, setCalificacion] = useState('')
  const [clasificacion, setClasificacion] = useState('')
  const [anio, setAnio] = useState('')
  const [descripcion, setDescripcion] = useState('')

  return (
    <div className="form-container">
      <h2>Formulario de Captura</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input onChange={(e)=> setNombre(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Calificacion</label>
          <input onChange={(e)=> setCalificacion(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Clasificación</label>
          <input onChange={(e)=> setClasificacion(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Año:</label>
          <input onChange={(e)=> setAnio(e.target.value)} type="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Descripción:</label>
          <input onChange={(e)=> setDescripcion(e.target.value)} type="text" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CrearPelicula;
