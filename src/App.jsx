import React from "react";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import CardApplication from "./pages/CardApplication";
import LoanApplication from "./pages/LoanApplication";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   

    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/loans" element={<Loans/>} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/cards/apply" element={<CardApplication/>} />
          <Route path="/loans/apply" element={<LoanApplication/>} /> 

        </Routes>
        
      </MainLayout>
    </BrowserRouter>

  );
};

export default App;
