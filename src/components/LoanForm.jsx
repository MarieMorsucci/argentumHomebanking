import React from "react";
import ButtonGetIt from "./ButtonGetIt";
import ButtonTermsAndConditions from "./ButtonTermsAndConditions";

function LoanForm() {
  return (
    <div className="p-6 h-screen flex items-center justify-center ">
      <div className="relative">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-gray-400 via-sky-800 to-sky-900 shadow-lg animate-pulse"></div>
        <div
          id="form-container"
          className="bg-white p-16 rounded-lg shadow-2xl w-120 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            className="text-center text-3xl font-bold mb-10 text-sky-700"
          >
            LOAN APPLICATION
          </h2>
          <form className="space-y-5 flex flex-col justify-center">
            <p className="font-bold text-center ">Select a Loan</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
            >
              <option value="debit">Personal</option>
              <option value="credit">Mortage</option>
              <option value="credit">Automotive</option>
            </select>

            <p className="font-bold text-center ">Origin Account</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
            >
              <option value="debit">VIN-001</option>
              <option value="credit">VIN-002</option>
            </select>

            <label htmlFor="amountLoan" className="p-2 w-full text-center font-bold">
              Amount($)
              <input
              className="w-full"
                type="number"
                id="amountLoan"
                placeholder="..."
              />
            </label>

            <p className="font-bold text-center ">Payments</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
            >
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="24">24</option>
            </select>

            <ButtonTermsAndConditions/>

            <ButtonGetIt />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoanForm;
