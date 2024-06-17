import React from "react";
import { NavLink as LinkRR } from "react-router-dom";

function CardAccount({ id, numberAccount, balance }) {
  return (
    <div
      className="w-2/3 md:w-[350px] md:h-[175px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] 
    flex justify-center text-white bg-gradient-to-r from-slate-400 via-sky-800
     to-slate-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300
      dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2"
    >
      <div className="w-full flex flex-col  gap-2 justify-center text-white">
        <div className="flex  gap-2 justify-center text-2xl text-white">
          <h2>Number: </h2>
          <p>{numberAccount}</p>
        </div>
        <div className="flex p-1 gap-2 justify-center  text-white">
          <p className="text-3xl">$ {balance}</p>
        </div>

       
          <LinkRR
            to={`/account/details/${id}`}
            className="text-white p-5 bg-slate-400  focus:ring-slate-500 dark:focus:ring-slate-800 
            shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm 
            px-5 py-2.5 text-center me-2 mb-2 "
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold 15px" : "",
                color: isActive ? "white" : "",
              };
            }}
          >
            Details
          </LinkRR>
       
      </div>
    </div>
  );
}

export default CardAccount;
