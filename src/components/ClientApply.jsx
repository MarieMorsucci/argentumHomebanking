import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonTermsAndConditions from "./ButtonTermsAndConditions";

function ClientApply() {
  
  const navigate = useNavigate();

  function applyAccount(event) {
    event.preventDefault();

    let click = confirm("Are you sure to apply for an account?");

    if (click) {
      alert("Your request has been sent successfully");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }

  return (
    <div className="p-6 h-screen flex items-center justify-center ">
      <div className="relative">
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-gray-400 via-sky-800 to-sky-900 shadow-lg animate-pulse"></div>
        <div id="form-container" className="bg-white p-16 rounded-lg shadow-2xl w-120 relative z-10 transform transition duration-500 ease-in-out" >
          <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-sky-700">
            CONGRATULATIONS! YOU ARE ONE STEP AWAY TO BE PART OF OUR TEAM
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 flex flex-col justify-center" action="post">
            <p className="font-bold text-center ">Please complete next client form</p>

            <label htmlFor="firstName" className="p-2 w-full text-center font-bold">
             <input type="text" name="firstname" id="name" placeholder="First Name"/> 
             </label>

            <label htmlFor="lastName" className="p-2 w-full text-center font-bold">
             <input type="text" name="lastname" id="lastname" placeholder="Last Name"/> 
             </label>

            <label htmlFor="email" className="p-2 w-full text-center font-bold">
             <input type="email" name="email" id="email" placeholder="Email Registration"/> 
             </label>
            
            <label htmlFor="password" className="p-2 w-full text-center font-bold">
             <input type="password" name="password" id="password" placeholder="Password"/> 
             </label>
            
            <label htmlFor="password" className="p-2 w-full text-center font-bold">
             <input type="password" name="password" id="password2" placeholder="Repeat your password"/> 
             </label>
            
            <ButtonTermsAndConditions/>

            <button
              onClick={applyAccount}
              className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              GET IT!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientApply;
