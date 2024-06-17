import React from "react";
import ClientApply from "../components/ClientApply";

function Register() {
  return (
    <div className="flex w-full">
      <div className="md:w-2/3">
        <img
          src="https://img.freepik.com/foto-gratis/hombre-negocios-loco-expresion-feliz_1194-4194.jpg"
          alt="image_bank"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="h-screen flex flex-col flex-grow justify-around  bg-slate-800 bg-opacity-80 pr-10 pl-10  rounded-lg shadow-lg">
        <div className=" flex justify-center mb-4 mt-4 self-center sel">
          <img
            src="/assets/images/argentum_logo.png"
            className="h-[100px] md:min-h-[200px] object-contain rounded-md"
            alt="logo"
          />
        </div>

        <h2 className="text-4xl text-center text-[#bacbf0] font-bold mb-6">
          REGISTER
        </h2>

        <ClientApply />
      </div>
    </div>
  );
}

export default Register;
