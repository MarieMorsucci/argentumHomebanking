import React from "react";
import { NavLink as LinkRR } from "react-router-dom";

function CurrentAccountDetail({ numberAccount, balance }) {
  return (
    <div className="min-w-[300px] min-h-[150px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] flex flex-col justify-center text-white bg-gradient-to-r from-teal-600 via-teal-700 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">
      <div>
        <div className="flex p-1 gap-2 justify-center text-white">
          <h2>Number Account: </h2>
          <p>{numberAccount}</p>
        </div>
        <div className="flex p-1 gap-2 justify-center  text-white">
          <p className="text-3xl">$ {balance}</p>
        </div>
      </div>

      <button className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <LinkRR
              className={(isActive) => (isActive ? "active" : "disable")}
              to="/transaction"
            >
              Make a new transaction!
            </LinkRR>
          </button>
    </div>
  );
}

export default CurrentAccountDetail;
