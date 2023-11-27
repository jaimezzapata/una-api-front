import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import rutasMenu from './components/routes/rutasMenu'
let router = createBrowserRouter(rutasMenu)

function App() {

  return (
    <section className='container'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
