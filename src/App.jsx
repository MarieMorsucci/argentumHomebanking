import React from "react";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CardApplication from "./pages/CardApplication";
import LoanApplication from "./pages/LoanApplication";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import AccountDetails from "./pages/AccountDetails";
import Landing from "./pages/Landing";
import TransactionForm from "./components/TransactionForm";
import { useSelector } from "react-redux";
import AuthRoute from "./HOCs/AuthRoute";
import AllRoutes from "./HOCs/AllRoutes";

// por fuera son parte del archivo, no se renderizan todo el tiempo
const routesAll = [
  { path: "/", element: <Landing />, key: "landing" },
  { path: "/login", element: <Login />, key: "login" },
  { path: "/register", element:<Register />, key: "register" },
];

const routesAuth = [
  { path: "/home", element: <Home />, key: "home" },
  { path: "/loans", element: <Loans />, key: "loans" },
  { path: "/cards", element: <Cards />, key: "cards" },
  { path: "/cards/apply", element: <CardApplication />, key: "cardsapply" },
  { path: "/loans/apply", element: <LoanApplication />, key: "loansapply" },
  {
    path: "/account/details/:id",
    element: <AccountDetails />,
    key: "account/details/:id",
  },
  { path: "/transaction", element: <TransactionForm />, key: "transaction" },
];

const App = () => {
  const loggedIn = useSelector((store)=>store.authReducer.loggedIn)
  return (
    <BrowserRouter>
      <Routes>
        {routesAll.map((route) => AllRoutes(route))
        }
        
        {routesAuth.map((route) =>AuthRoute(route))
        }

        //para cualquier ruta que no sea las anteriores
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
