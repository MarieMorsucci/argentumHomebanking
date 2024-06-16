import React from "react";
import BannerCarrousel from "../components/BannerCarrousel";
import { NavLink as LinkRR } from "react-router-dom";

import BenefitCard from "../components/BenefitCard";
import Login from "./Login";

function Landing() {
  const benefits = [
    {
      title: "Bajas Comisiones",
      description:
        "Ofrecemos las tasas más bajas del mercado para que ahorres más.",
      icon: "💰",
    },
    {
      title: "Atención 24/7",
      description: "Soporte en línea las 24 horas, los 7 días de la semana.",
      icon: "🕒",
    },
    {
      title: "Seguridad Avanzada",
      description: "Protegemos tus datos con la más alta seguridad.",
      icon: "🔒",
    },
  ];

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}
      ></div>
        <h1 className="text-5xl font-bold mb-8 z-1">Bienvenido a ArgentumBank</h1>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
        <div className="flex ">
          <div>
            <button className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
            <LinkRR
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/login"
            >
              Login
            </LinkRR>
            </button>
            <button className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
            <LinkRR
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to="/register"
            >
              Sign Up!
            </LinkRR>
            </button>
          </div>
        </div>
        <div className="w-full max-w-4xl mb-8">
          <BannerCarrousel />
          {/* <div>
              <img src="https://via.placeholder.com/800x400" alt="Carousel 1" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Carousel 2" />
            </div>
            <div>
              <img src="https://via.placeholder.com/800x400" alt="Carousel 3" />
            </div> */}
          {/* </BannerCarrousel> */}
        </div>
        <div className="flex space-x-4 mb-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
