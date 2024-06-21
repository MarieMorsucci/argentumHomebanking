import React, { useState, useEffect } from "react";

import Options from "../components/Options";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

function TransactionForm(event) {
  useEffect(() => {
    setTimeout(() => {
      getAccounts();
    }, 100);
  }, []);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [accounts, setAccounts] = useState({});
  const [selectedNumberAccount, setSelectedNumberAccount] = useState("");

  //  PARA EL POST
  const [balance, setBalance] = useState(0);

  const [sourceAccount, setSourceAccount] = useState("");
  const [destinationAccount, setDestinationAccount] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  const token = useSelector((store) => store.authReducer.user.token);

  async function getAccounts() {
    try {
      //OBTENER LAS CUENTAS DE USUARIO
      let response = await axios.get("https://argentumhomebanking.onrender.com/api/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = response.data.accounts;

      setAccounts(data);
      console.log(accounts);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //HACER AUTOMATICOS LAS CUENTAS
  function getSelectedOption(event) {
    event.preventDefault();
    const accountSource = event.target.value;
    console.log(accountSource);
    setSelectedNumberAccount(accountSource);
  }

  useEffect(() => {
    if (selectedNumberAccount) {
      const account = accounts.find(
        (account) => account.numberAccount == selectedNumberAccount
      );
      setSourceAccount(account.numberAccount);
      setBalance(account.balance);
      console.log(sourceAccount);
    }
  }, [selectedNumberAccount, sourceAccount]);

  async function makeTransaction(event) {
    event.preventDefault();

    let click = confirm("Do you confirm the transaction?");

    if (click) {
      try {
        const createTransaction = {
          amount: amount,
          description: `${description}`,
          originNumber: `${sourceAccount}`,
          destinationNumber: `${destinationAccount}`,
        };
        console.log(createTransaction);

        const sent = await axios.post(
          "https://argentumhomebanking.onrender.com/api/transactions/current/transaction",
          createTransaction,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (sent) {
          setTimeout(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your transaction has been sent successfully",
              showConfirmButton: false,
            });
            navigate("/home");
          }, 3000);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data}`,
          footer: "",
        });
      }
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
            NEW TRANSACTION
          </h2>
          <form
            onSubmit={makeTransaction}
            className="space-y-5 flex flex-col justify-center"
          >
            <p className="font-bold text-center ">Select Source Account</p>
            <select
              onChange={getSelectedOption}
              value={selectedNumberAccount}
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              id="loanName"
            >
              {loading ? (
                <option value="">Choose one..</option>
              ) : (
                accounts &&
                accounts.map((account) => (
                  <Options
                    key={account.numberAccount}
                    name={account.numberAccount}
                    value={account.numberAccount}
                  />
                ))
              )}
            </select>

            <p className="font-bold text-center ">Destination Account</p>
            <input
              className="w-full h-12 border border-sky-700 px-3 rounded-lg"
              type="text"
              id="destinationAccount"
              onChange={(e) => setDestinationAccount(e.target.value)}
              value={destinationAccount}
              placeholder="Destination Account Number..."
            />

            <label htmlFor="amount" className="p-2 w-full ">
              Amount($)
              <input
                className="w-full text-center font-bold"
                type="number"
                id="amount"
                placeholder="$"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>

            <p className="italic p-8 text-red-600">
              Max amount for this transaction is ${balance && balance}
            </p>

            <label htmlFor="description" className="p-2 w-full ">
              Transaction Description
              <input
                className="w-full text-center font-bold"
                type="text"
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
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

export default TransactionForm;
