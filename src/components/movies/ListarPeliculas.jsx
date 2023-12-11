import axios from "axios";
import Header from "../helpers/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListarPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  const traerPeliculas = async () => {
    let listadoPeliculas = await axios.get("http://localhost:3001/peliculas");
    console.log(listadoPeliculas)
    setPeliculas(listadoPeliculas.data);
  };  

  useEffect(()=>{
    traerPeliculas()
  }, [])

  async function eliminarPelicula(id){
    await axios.delete("http://localhost:3001/peliculas/"+id)
    traerPeliculas()
  }  

  function confirmarDelete(id){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPelicula(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className="peliculas">
      <Header />
      <section className="cards">
        {peliculas.map((pelicula) => (
          <section key={pelicula.id}>
            <p>Nombre: {pelicula.nombre}</p>
            <p>Calificacion: {pelicula.calificacion}</p>
            <p>Clasificacion: {pelicula.clasifiacion}</p>
            <p>Año: {pelicula.anio}</p>
            <p>Descripcion: {pelicula.descripcion}</p>
            <div className="botones">
              <Link to={'/editar/'+pelicula.id}>Editar</Link>
              <button onClick={()=> confirmarDelete(pelicula.id)}>Eliminar</button>
            </div>
          </section>
        ))}
      </section>
      {/* <button type="butoon" onClick={traerPeliculas}>
        Mostrar
      </button> */}
      <Link to='/crear' className="btnAgregar">Agregar</Link>
    </div>
  );
};

export default ListarPeliculas;
