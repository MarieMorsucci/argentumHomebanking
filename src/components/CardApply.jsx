import React from "react";
import ButtonTermsAndConditions from "./ButtonTermsAndConditions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";




function CardApply() {

  const navigate = useNavigate();
  //const [loading, setLoading] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [color, setColor] = useState("");
  const [type, setType] = useState("");

  const token = useSelector((store) => store.authReducer.user.token);

  async function applyCard(event) {
    event.preventDefault();
     
      try {
  
        const createCard={
          cardType:`${type}`,
          color: `${color}`
        }
  
        //console.log(createCard);
  
        const sent = await axios.post("http://localhost:8080/api/clients/current/cards",
         createCard,
          {
            headers: {
              Authorization: `Bearer ${token}`
          }
        })
  
  
      // console.log(sent.data);
  
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your request has been sent successfully",
        showConfirmButton: false,
      });
  
  
        setTimeout(() => {
         navigate("/cards");
        }, 3000);
  
      } catch (error) {
  
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data}`,
          footer: "",
        });
  
    
        //console.log(error);
        
      }
      
      if (click) {

    }
  }

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
          <form 
          className="space-y-5 flex flex-col justify-center"
          onSubmit={applyCard}
          >
            <p className="font-bold text-center ">Select Card Type</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
              value={type}
              onChange={(e) =>setType(e.target.value)}
            >
              <option value="" disabled >Choose a Type Card</option>
              <option value="DEBIT">DEBIT</option>
              <option value="CREDIT">CREDIT</option>
            </select>

            <p className="font-bold text-center ">Select Card Membership</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="cardType"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="" disabled>Choose a membership</option>
              <option value="SILVER">SILVER</option>
              <option value="GOLDEN">GOLDEN</option>
              <option value="TITANIUM">TITANIUM</option>
            </select>

             <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
              Accept Terms and Conditions
              <div className="relative inline-block">
                <input
                  id="termsCond"
                  className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400
           checked:border-gray-200 focus-visible:outline-none focus-visible:ring-2
           focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                ></input>
                <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-graborder-gray-200"></span>
              </div>
            </label>

            <button
              type="submit"
              className=" bg-gradient-to-r from-gray-600 to-gray-600 active:from-sky-900 active:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform active:scale-105 transition duration-300 ease-in-out "
              disabled={!acceptedTerms}
            >
              GET IT!
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default CardApply;
