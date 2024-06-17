import React from "react";

function Loan({ id, amount, payments, loan_name }) {
  return (
    <div className="p-2 flex justify-center">
      <div className="w-[400px] h-[180px] flex flex-col justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-white bg-gradient-to-r  from-slate-400 via-sky-800
     to-slate-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2">
      <div className="flex p-1 gap-2 justify-center  text-white">
          <p className="text-3xl text-lime-300">Id: {id}</p>
        </div>
        <div className="flex p-1 gap-2 justify-center text-white">
          <h2 className="text-2xl">{loan_name}</h2>
        </div>
        <div className="flex p-1 gap-2 justify-center  text-white">
          <p className="text-3xl text-lime-300">$ {amount}</p>
        </div>
        <div className="flex p-1 gap-2 justify-center text-white">
          <h2>Number of Payments: </h2>
          <p>{payments}</p>
        </div>
      </div>
    </div>
  );
}

export default Loan;
