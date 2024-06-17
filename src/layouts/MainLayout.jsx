import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function MainLayout({ children }) {
  const { loggedIn } = useSelector((store) => store.authReducer);

  return (
    <div className=" min-h-screen min-w-screen flex flex-col justify-between">
      <div className="flex-grow flex ">
        {loggedIn && <Header />}
        <main class="w-full bg-slate-300">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
