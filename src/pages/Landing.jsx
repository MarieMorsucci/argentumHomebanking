import React from "react";
import { NavLink as LinkRR, Navigate, useNavigate } from "react-router-dom";

import BenefitCard from "../components/BenefitCard";
import Login from "./Login";
import Register from "./Register";
import Swal from "sweetalert2";

function Landing() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  function handleRegister() {
    navigate("/register");
  }

  const benefits = [
    {
      title: "Low Commissions",
      description:
        "We offer the lowest rates on the market so you can save more.",
      icon: "💰",
    },
    {
      title: "Open to public 24/7",
      description: "Online support during the week, all day!!",
      icon: "🕒",
    },
    {
      title: "Security is our first occupation",
      description: "We protect your data with the highest security.",
      icon: "🔒",
    },
  ];

  return (
    <div className=" flex content-between relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://img.freepik.com/foto-gratis/vista-frontal-colega-trabajo-mirando-portatil_23-2148327004.jpg')",
        }}
      >
        <div className="flex p-3 justify-end gap-3 bg-slate-800 opacity-70 ">
          <LinkRR
            to="/login"
            className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            LOGIN
          </LinkRR>

          <LinkRR
            to="/register"
            className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            REGISTER
          </LinkRR>
        </div>
        <div className="flex justify-center p-6">
          <img
            src="/assets/images/argentum_logo.png"
            className="h-[150px] md:min-h-[300px] object-contain rounded-md"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-full  flex flex-col content-end justify-end h-full text-white bg-opacity-50">
        <div className="  flex flex-wrap justify-center mb-8 bg-slate-800 opacity-70 p-4 pt-6  gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
