import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
function App() {
const router = createBrowserRouter([
  {
    path : "/",
    element : <Login/>
  },
  {
    path : "/Register",
    element : <Register/>
  },
  {
    path : "/Home",
    element : <Home/>
  },
])
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
