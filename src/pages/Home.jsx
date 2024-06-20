import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
//no hace falta instancialo, para obtener la info que viene del reductor

import CardAccount from "../components/CardAccount";
import { NavLink as LinkRR, useNavigate } from "react-router-dom";
import axios from "axios";

//Va a venir por prop directamente el usuario
function Home() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  const [accounts, setAccounts] = useState([]);
  const [name, setName] = useState("");
  //usar ruta del reducer tal cual es

  const token = useSelector((store) => store.authReducer.user.token);
 // console.log(token);

  useEffect(() => {
    getAccounts();
  }, []);

  async function getAccounts() {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/auth/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //console.log(response);
      setAccounts(response.data.accounts);

      setName(response.data.firstName);

      if (accounts.length >= 3) {
        setIsActive(false);
      }

      //console.log(accounts);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async function createAccount(event) {
    event.preventDefault();

    let click2 = Swal.fire({
      title: "Do you want to create another account?",
      icon: "question",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    });

    if (click2) {
      try {
        const sent = await axios.post(
          "http://localhost:8080/api/clients/current/accounts",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //console.log(sent);

        setTimeout(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your request has been sent successfully",
            showConfirmButton: false,
          });
          navigate("/home");
        }, 3000);


      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data}`,
          footer: "",
        });
      }
    }


    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  return (
    <div className=" h-full flex flex-col grow justify-between ">
      <div className=" w-full ">
        <img
          src="/assets/images/im1.jpg"
          alt="image_bank"
          className="h-40 w-full object-cover"
        />
        <h1 className=" font-bold text-center text-4xl text-[#A5BDDC] text-sky-950 p-2">
          Welcome to Argentum Bank {name}
        </h1>
      </div>
      <div className="h-full flex flex-wrap content-center gap-10 mt-25 justify-center pt-4 pb-4 bg-slate-600 opacity-80">
        {accounts &&
          accounts.map((account) => (
            <CardAccount
              key={account.id}
              id={account.id}
              numberAccount={account.numberAccount}
              balance={account.balance}
            />
          ))}
      </div>

      {isActive && (
        <div className="  flex flex-wrap justify-center p-6">
          <p className="  font-semibold text-center w-full ">
            Do you need another account?
          </p>

          <button
            onClick={createAccount}
            className="bg-gradient-to-r from-sky-700 to-lime-500 hover:from-sky-800 hover:to-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Get Another Account
          </button>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default Home;
