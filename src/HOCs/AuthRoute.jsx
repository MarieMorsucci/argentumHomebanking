import { useSelector } from "react-redux"
import { Navigate, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";

//PARA MANEJAR LAS RUTAS, MANEJA EL ACCESO DE LAS RUTAS DESDE AQUI
function AuthRoute(route) {

    const loggedIn = useSelector((store)=>store.authReducer.loggedIn)

    console.log(loggedIn);
    console.log(route.element);
    console.log(route.path);


    return loggedIn && <Route path={route.path} element={<MainLayout>{route.element}</MainLayout>} key={route.key} /> 

}

export default AuthRoute;