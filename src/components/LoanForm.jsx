import React, { useState, useEffect } from "react";
import ButtonTermsAndConditions from "./ButtonTermsAndConditions";

import Options from "../components/Options";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function LoanForm(event) {

  useEffect(() => {
    setTimeout(() => {
      getLoans();
    }, 100);
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loans, setLoans] = useState({});
  const [loan, setLoan] = useState({});
  const [accounts, setAccounts] = useState({});
  const [selectedLoanName, setSelectedLoanName] = useState({});

  //  PARA EL POST
  const [amount, setAmount] = useState("");
  const [payments, setPayments] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");

  const token = useSelector((store) => store.authReducer.user.token);

  async function getLoans() {
    try {
      //OBTENER LOS LOANS DISPONIBLES

      let response = await axios.get("http://localhost:8080/api/loans/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let data = response.data;
      console.log(data);
      setLoans(data);

      //OBTENER LAS CUENTAS DE USUARIO
      let respon = await axios.get("http://localhost:8080/api/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let dat = respon.data.accounts;

      console.log(dat);

      setAccounts(dat);

      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  }

  //HACER AUTOMATICOS LOS LOANS
  function getSelectedOption(event) {
    //event.preventDefault();
    const loanName = event.target.value;
    console.log(loanName);
    setSelectedLoanName(loanName);
  }

  useEffect(() => {
    if (selectedLoanName) {
      const selectedLoan = loans.find((loan) => loan.name == selectedLoanName);
      if (selectedLoan) {
        setLoan(selectedLoan)
        setPayments(selectedLoan.payments);
        setAmount(selectedLoan.amount);
      }
    }
  }, [selectedLoanName,loan]);

  function applyLoan() {
    let click = confirm("Are you sure to apply to this loan?");
    event.preventDefault();

    if (click) {
      alert("Your request has been sent successfully");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
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
            LOAN APPLICATION
          </h2>
          <form className="space-y-5 flex flex-col justify-center">
            <p className="font-bold text-center ">Select a Loan</p>
            <select onChange={getSelectedOption} value={loan} className="w-full h-12 border border-sky-700 px-3 rounded-lg"  id="loanName" >
              {loading ? (
                <option value="">Select an option</option>
              ) : (
                loans.map((loan) => (
                  <Options key={loan.name} value={loan.name} name={loan.name} />
                ))
              )}
            </select>

            <p className="font-bold text-center ">Origin Account</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="destinationAccount"
              onChange={(e) => setDestinationAccount(e.target.value)}
              value={destinationAccount}
            >
              {loading ? (
                <option value="">Loading..</option>
              ) : (
                accounts.map((account) => (
                  <Options
                    key={account.numberAccount}
                    name={account.numberAccount}
                    value={account.numberAccount}
                  />
                ))
              )}
            </select>

            <label
              htmlFor="amountLoan"
              className="p-2 w-full text-center font-bold"
            >
              Amount($)
              <input
                className="w-full"
                type="number"
                id="amountLoan"
                placeholder="$"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="italic p-8 text-red-600">
                Max amount for this type of loan is {loan.maxAmount}{" "}
              </p>
            </label>

            <p className="font-bold text-center ">Payments</p>
            <select
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="payments"
              value={payments}
              onChange={(e) => setPayments(e.target.value)}
              placeholder="Choose number of payments"
            >
              {/* {loading ? (
                <option value="">Loading...</option>
              ) : (
                payments.map((payment) => (
                  <Options key={payment} name={payment} value={payment} />
                ))
              )} */}
            </select>

            <ButtonTermsAndConditions />

            <button
              onClick={applyLoan}
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

export default LoanForm;
