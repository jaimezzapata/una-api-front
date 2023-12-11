import Home from '../Home'
import ErrorNotFound from '../helpers/ErrorNotFound'
import CrearPelicula from '../movies/CrearPelicula'
import EditarPelicula from '../movies/EditarPelicula'
import ListarPeliculas from '../movies/ListarPeliculas'
let rutasMenu = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorNotFound />
    },
    {
        path: '/peliculas',
        element: <ListarPeliculas />
    },
    {
        path: '/crear',
        element: <CrearPelicula />  
    },
    {
        path: '/editar/:id',
        element: <EditarPelicula />
    }
]

export default rutasMenu