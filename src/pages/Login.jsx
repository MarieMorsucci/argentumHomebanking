import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { Link as LinkRR } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Login() {
  useEffect(() => {
    setTimeout(() => {
      handleLogin();
    }, 2000);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      //aca ha que reemplazar por un get element by id
      const user = {
        email: `${email}`,
        password: `${password}`,
      };

      //Hacer el login con axios
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      let token = response.data;
      //console.log(token);
      //para el get: primer arg el endpoint de la api, segundo las configuraciones donde va el header que va a tener el token
      const responseCurrent = await axios.get(
        "http://localhost:8080/api/auth/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let client = responseCurrent.data;
      client.token = token;
      //console.log(client);

      dispatch(login(client));
    } catch (error) {
      Swal.fire({
        title: "Invalid Credentials: ",
        text: `${error.response.data}`,
        icon: "error",
      });
    }

    setTimeout(() => {
      navigate("/home");
    }, 500);
  };

  return (
    <div className="flex w-full">
      <div className="md:w-2/3">
        <img
          src="https://img.freepik.com/foto-gratis/mujer-tiro-medio-tarjeta-credito_23-2149476760.jpg"
          alt="image_bank"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="h-screen flex flex-col flex-grow justify-around bg-slate-800 bg-opacity-80 pr-10 pl-10  rounded-lg shadow-lg">
        <div className=" flex justify-center  self-center sel">
          <img
            src="/assets/images/argentum_logo.png"
            className="h-[200px] md:min-h-[300px] object-contain rounded-md"
            alt="logo"
          />
        </div>

        <h2 className="text-4xl text-center text-[#bacbf0] font-bold ">
          {" "}
          LOGIN{" "}
        </h2>

        <div className=" flex items-center justify-center  ">
          <div className="relative w-9/12 ">
            <div
              className="absolute  -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r
         from-gray-400 via-sky-800 to-sky-900 shadow-lg animate-pulse"
            ></div>
            <div
              id="form-container"
              className="bg-white p-6 rounded-lg shadow-2xl w-120 relative z-10 transform transition duration-500 ease-in-out"
            >


              <form
                className=" p-8 space-y-5 flex flex-col justify-center bg-white rounded-md"
                action="post"
              >
                <label
                  htmlFor="email"
                  className="p-2 w-full text-center font-bold"
                >
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Registration"
                  />
                </label>

                <label
                  htmlFor="password"
                  className="p-2 w-full text-center font-bold"
                >
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                </label>

                <div className="text-center">
                  <a class="w-full text-sm text-center text-sky-800" href="#">
                    Forgot your password?
                  </a>
                </div>

                <button
                  type="submit"
                  onClick={handleLogin}
                  className="bg-gradient-to-r from-sky-800 to-gray-400 hover:from-sky-900 hover:to-gray-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  LOGIN
                </button>
              </form>


            </div>
          </div>
        </div>

        <div class="text-sm text-center mt-[1.6rem] text-white">
          Don’t have an account yet?{" "}
          <a className="text-sm text-[#bacbf0] " href="#">
            <LinkRR to="/register">Apply Now!</LinkRR>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
