import { useSelector } from "react-redux"
import { Navigate, Route } from "react-router-dom"

//PARA MANEJAR LAS RUTAS, MANEJA EL ACCESO DE LAS RUTAS DESDE AQUI
function AllRoutes(route) {
    const loggedIn = useSelector((store)=>store.authReducer.loggedIn)
    
    return !loggedIn && <Route path={route.path} element={route.element} key={route.key} /> 

}

export default AllRoutes;