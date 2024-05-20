import React from "react";
import { Link as LinkRR } from "react-router-dom";
import ButtonTermsAndConditions from "./ButtonTermsAndConditions";
import ButtonGetIt from "./ButtonGetIt";

function CardApply() {
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
            CARD APPLICATION
          </h2>
          <form className="space-y-5 flex flex-col justify-center">
            <p className="font-bold text-center ">Select Card Type</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
            >
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </select>
            <p className="font-bold text-center ">Select Card Membership</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
            >
              <option value="debit">SILVER</option>
              <option value="credit">GOLD</option>
              <option value="credit">TITANIUM</option>
            </select>

            <ButtonTermsAndConditions/>

            <ButtonGetIt/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardApply;
