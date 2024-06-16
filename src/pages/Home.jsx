import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//no hace falta instancialo, para obtener la info que viene del reductor

import CardAccount from "../components/CardAccount";
import { NavLink as LinkRR, useNavigate } from "react-router-dom";
import axios from "axios";
import { store } from "../redux/store";

//Va a venir por prop directamente el usuario
function Home() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);
  //usar ruta del reducer tal cual es
  const token = useSelector((store) => store.authReducer.user.token);
  //  console.log(token);

  const name = useSelector((store) => store.authReducer.user.name);

  async function getAccounts() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/clients/current/accounts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAccounts(response.data);
      console.log(accounts);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    getAccounts();
  }, []);

  function getAccount() {
    let click = confirm("Do you want to create another account?");
    if (click) {
      console.log("yes");
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    }
  }

  return (
    <div className="h-screen p-3 flex flex-col justify-between">
      <div className="w-full p-6">
        <h1 className="font-bold text-center text-4xl text-[#A5BDDC] text-sky-950 ">
          BIENVENIDO A ARGENTUM BANK {name} !!
        </h1>
      </div>
      <div className=" flex flex-wrap gap-5 p-2 justify-around">
        {accounts && accounts.map((account) =><CardAccount key={account.id} id={account.id} numberAccount={account.numberAccount} balance={account.balance}/>)}
      </div>

      <div className="flex flex-wrap justify-center p-6">
        <p className="  font-semibold text-center w-full ">
          Do you need another account?
        </p>
        <button
          onClick={getAccount}
          className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Get Another Account
        </button>
      </div>
    </div>
  );
}

export default Home;
