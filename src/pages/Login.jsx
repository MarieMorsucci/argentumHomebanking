import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
import { Link as LinkRR } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Login() {
  useEffect(() => {
    setTimeout(() => {
      <p>LOADING.....!</p>;
      handleLogin();
    }, 2000);
  }, []);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      //aca ha que reemplazar por un get element by id
      const user = {
        email: "melba@dominio.com",
        password: "123",
      };

      //Hacer el login con axios
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      let token = response.data;
      console.log(token);
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
      console.log(client);

      dispatch(login(client));

      setLoading(false);

      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (error) {
      console.log(error.response.data);
      alert("Invalid credentials: " + error.response.data);
    }
  };

  return (
    <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">Iniciar Sesión</h2>
     
      <form className="space-y-5 flex flex-col justify-center" action="post">
        <label htmlFor="email" className="p-2 w-full text-center font-bold">
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

        <label htmlFor="password" className="p-2 w-full text-center font-bold">
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

        <div>
          <a class="text-sm text-[#7747ff]" href="#">
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




      <div class="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?{" "}
        <a className="text-sm text-[#7747ff] " href="#">
          <LinkRR to="/register">Apply Now!</LinkRR>
        </a>
      </div>
    </div>
  );
}
export default Login;
