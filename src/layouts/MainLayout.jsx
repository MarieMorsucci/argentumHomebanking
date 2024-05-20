import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <div className="min-h-full flex ">
        <Header />
        <Main>
          {children}
        </Main>
      </div>
        <Footer />
    </div>
  );
}

export default MainLayout;
