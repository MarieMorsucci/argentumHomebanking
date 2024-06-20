import React, { useEffect, useState } from "react";
import Loan from "../components/Loan";
import BannerCarrousel from "../components/BannerCarrousel";
import { NavLink as LinkRR } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

function Loans() {
  //Va a venir por prop directamente el usuario

  useEffect(() => {
    setTimeout(() => {
      getLoans();
    }, 1000);
  }, []);

  const [loading, setLoading] = useState(true);

  const [isActive, setIsActive] = useState(true);
  const [loans, setLoans] = useState({
    id: "",
    amount: "",
    payments: "",
    loan_name: "",
  });

  const token = useSelector((store) => store.authReducer.user.token);

  async function getLoans() {
    try {
      let response = await axios.get("http://localhost:8080/api/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = response.data.loans;
     // console.log(data);

      setLoans(data);

      //console.log(loans);
     // console.log(loans.length);

      if (loans.length >= 5) {
        setIsActive(false);
      }

      setLoading(false);
    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data}`,
        footer: "",
      });

      //console.error(error);
    }
  }

  return (
    <div className="flex flex-col justify-center">
      
      <div className=" h-56 sm:h-64 xl:h-80 2xl:h-80 md:object-right-bottom">
        <BannerCarrousel />
      </div>

      <div className="p-5 flex flex-wrap justify-around gap-4">
        {loading ? (
          <div class="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin
          aspect-square w-8 flex justify-center items-center text-yellow-700"></div>
        ) : (
          loans.map((loan) => (
            <Loan
              key={loan.id}
              id={loan.id}
              amount={loan.amount}
              payments={loan.payments}
              loan_name={loan.loan_name}
            />
          ))
        )}
      </div>
      {isActive && 
        <div className="flex flex-wrap justify-center p-6">
          <p className=" p-2 font-semibold text-center w-full ">
            Make your dreams true! Get a loan!
          </p>

          <button className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <LinkRR
              className={(isActive) => (isActive ? "active" : "disable")}
              to="/loans/apply"
            >
              Apply Now!
            </LinkRR>
          </button>
        </div>
      }
    </div>
  );
}
export default Loans;
