import React, { useEffect, useState } from "react";
import Loan from "../components/Loan";
import BannerCarrousel from "../components/BannerCarrousel";
import { NavLink as LinkRR } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Loans() {
  //Va a venir por prop directamente el usuario

  
  useEffect(() => {
    setTimeout(() => {
      getLoans();
    }, 1000);
  }, []);

  const [loading, setLoading] = useState(true);

  const [loans, setLoans] = useState({
    id:'',
    amount:'',
    payments:'',
    loan_name:''
  });

  const token = useSelector((store) => store.authReducer.user.token);

  async function getLoans() {
    try {
      let response = await axios.get("http://localhost:8080/api/auth/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
        }
      })
      let data = response.data.loans;
      console.log(data);
      setLoans(data);


      setLoading(false);


    } catch (error) {
      console.error(error);
      
    }
  }



  return (
    <div className="p-3 flex flex-col justify-center">
      <h1 className="h-3/5 p-3 font-bold text-center text-4xl text-sky-950 ">
        MY LOANS
      </h1>
      <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96">
        <BannerCarrousel />
      </div>

      <div className="p-5 flex flex-wrap justify-around gap-4">

        {loading ? 
        (<p>Loading</p>)
        :
        (
        loans.map((loan)=> 
        <Loan key={loan.id} id={loan.id} amount={loan.amount} payments={loan.payments} loan_name={loan.loan_name}/>
        )
      )}
       
      </div>
      <div className="flex flex-wrap justify-center p-6">
        <p className=" p-2 font-semibold text-center w-full ">
          Make your dreams true! Get a loan!
        </p>
        <button className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <LinkRR className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" } to="/loans/apply">Apply Now!</LinkRR>
        </button>
      </div>
    </div>
  );
}
export default Loans;
