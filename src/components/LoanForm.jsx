import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
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
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loans, setLoans] = useState([]);
  const [accounts, setAccounts] = useState({});
  const [selectedLoanName, setSelectedLoanName] = useState("Personal");
  const [loan, setLoan] = useState({ maxAmount: 0 });

  //  PARA EL POST
  const [amount, setAmount] = useState(0);
  const [payments, setPayments] = useState();
  const [destinationAccount, setDestinationAccount] = useState("");

  const token = useSelector((store) => store.authReducer.user.token);

  async function getLoans() {
    try {
      //OBTENER LOS LOANS DISPONIBLES

      let response = await axios.get("https://argentumhomebanking.onrender.com/api/loans/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let data = response.data;
      console.log(data);
      setLoans(data);
      console.log(loans);

      //OBTENER LAS CUENTAS DE USUARIO
      let respon = await axios.get("https://argentumhomebanking.onrender.com/api/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let dat = respon.data.accounts;

      setAccounts(dat);
      console.log(accounts);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //HACER AUTOMATICOS LOS LOANS
  function getSelectedOption(event) {
    //event.preventDefault();
    const loanName = event.target.value;
    //  console.log(loanName);
    setSelectedLoanName(loanName);
  }

  useEffect(() => {
    if (selectedLoanName) {
      const selectedLoan = loans.find((loan) => loan.name == selectedLoanName);
      setLoan(selectedLoan);

      // console.log(selectedLoan);
      // console.log(loan);
    }
  }, [selectedLoanName, loan]);

  async function applyLoan(event) {
    event.preventDefault();

    try {
      const createClientLoan = {
        name: `${selectedLoanName}`,
        amountApply: amount,
        paymentsApply: payments,
        accountNumber: `${destinationAccount}`,
      };
      // console.log(createClientLoan);

      const send = await axios.post(
        "https://argentumhomebanking.onrender.com/api/loans/current/apply",
        createClientLoan,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //  console.log(send.data);

      //alert("Your request has been sent successfully");

      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request has been sent successfully",
          showConfirmButton: false,
        });
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: '"Form is not valid. Check info and Terms&Conditions"',
        icon: "error",
        confirmButtonText: "Cool",
      });

      // console.log(error);
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
          <form
            onSubmit={applyLoan}
            className="space-y-5 flex flex-col justify-center"
          >
            <p className="font-bold text-center ">Select a Loan</p>
            <select
              onChange={getSelectedOption}
              value={selectedLoanName}
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="loanName"
            >
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

            <label htmlFor="amountLoan" className="p-2 w-full ">
              Amount($)
              <input
                className="w-full text-center font-bold"
                type="number"
                id="amountLoan"
                placeholder="$"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="italic p-8 text-red-600">
                Max amount for this type of loan is ${loan && loan.maxAmount}
              </p>
              <p className="font-bold text-center ">Payments</p>
              <select
                className="w-full h-12 border border-sky-700 px-3 rounded-lg"
                id="payments"
                value={payments}
                onChange={(e) => setPayments(e.target.value)}
                placeholder="Choose number of payments"
              >
                {loading ? (
                  <option value="">Loading...</option>
                ) : (
                  loan &&
                  loan.payments.map((payment) => (
                    <Options key={payment} name={payment} value={payment} />
                  ))
                )}
              </select>
            </label>

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

export default LoanForm;
