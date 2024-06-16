import React from "react";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CardApplication from "./pages/CardApplication";
import LoanApplication from "./pages/LoanApplication";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import AccountDetails from "./pages/AccountDetails";
import Landing from "./pages/Landing";

const App = () => {

  return (
   

    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/loans" element={<Loans/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/cards/apply" element={<CardApplication/>} />
          <Route path="/loans/apply" element={<LoanApplication/>} /> 
          <Route path="/account/details/:id" element={<AccountDetails/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>  
      </MainLayout>
    </BrowserRouter>

  );
};

export default App;
