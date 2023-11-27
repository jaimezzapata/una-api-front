import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/peliculas">Películas</Link>
            <Link to="/generos">Géneros</Link>
            <Link to="/cerrar">Cerrar Sesión</Link>
        </nav>
    </header>
  )
}

export default Header