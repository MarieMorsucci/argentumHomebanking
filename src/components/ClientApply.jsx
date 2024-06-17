import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ButtonTermsAndConditions from "./ButtonTermsAndConditions";
import axios from "axios";

function ClientApply() {
  useEffect(() => {
    setTimeout(() => {
      <p>LOADING.....!</p>;
      applyAccount();
    }, 3000);
  }, []);

  const navigate = useNavigate();

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [equalPass, setEqualPass] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    setEqualPass(password == password2);
  }, [password, password2]);

  async function applyAccount(event) {
    event.preventDefault();
    let click = confirm("Are you sure to apply for an account?");

    if (click) {
      const createClient = {
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        email: `${email}`,
        password: `${password}`,
      };

      console.log(createClient);

      const send = await axios.post(
        "http://localhost:8080/api/auth/signup",
        createClient
      );

      console.log(send.data);

      alert("Your request has been sent successfully");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }

  return (
    <div className=" flex items-center justify-center mb-7 ">
      <div className="relative w-9/12 ">
        <div
          className="absolute  -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r
         from-gray-400 via-sky-800 to-sky-900 shadow-lg animate-pulse"
        ></div>
        <div
          id="form-container"
          className="bg-white p-6 rounded-lg shadow-2xl w-120 relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2 className="text-center text-l italic font-bold mb-4 text-sky-700">
            You are one step away to be part of our family
          </h2>

          <form
            onSubmit={applyAccount}
            className="flex flex-col space-y-2 justify-center"
          >
            <p className="font-bold text-center ">
              Please complete registration
            </p>

            <label htmlFor="firstName" className="p-2 text-center font-bold">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstname"
                id="name"
                placeholder="First Name"
              />
            </label>

            <label htmlFor="lastName" className="p-2  text-center font-bold">
              <input
                type="text"
                name="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
                placeholder="Last Name"
              />
            </label>

            <label htmlFor="email" className="p-2  text-center font-bold">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Email Registration"
              />
            </label>

            <label htmlFor="password" className="p-2  text-center font-bold">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </label>

            <label htmlFor="password2" className="p-2  text-center font-bold">
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                id="password2"
                placeholder="Repeat your password"
              />
            </label>

            {password2 && !equalPass && (
              <p className="text-red-500">Passwords should be the same</p>
            )}

            <label className="flex cursor-pointer text-center justify-between p-2 text-slate-400">
              Accept Terms and Conditions
              <div className="relative inline-block">
                <input
                  id="termsCond"
                  className=" text-center h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400
           checked:border-gray-200 focus-visible:outline-none focus-visible:ring-2
           focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                ></input>
                <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-graborder-gray-200"></span>
              </div>
            </label>

            {equalPass && (
              <button
                type="submit"
                className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                GET IT!
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientApply;
