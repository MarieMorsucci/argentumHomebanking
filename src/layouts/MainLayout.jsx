import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function MainLayout({ children }) {
  const { loggedIn } = useSelector((store) => store.authReducer);

  return (
    <div className=" min-h-screen w-full flex flex-col justify-between">
      <div className="flex-grow flex ">
        {loggedIn && <Header />}
        <main className=" w-screen bg-slate-200  ">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
