import Home from '../Home'
import ErrorNotFound from '../helpers/ErrorNotFound'
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
]

export default rutasMenu